import {
  module,
  test
} from 'qunit';
import {
  click,
  visit,
  currentURL
} from '@ember/test-helpers';
import {
  setupApplicationTest
} from 'ember-qunit';
import {
  setupMirage
} from 'ember-cli-mirage/test-support';

module('Acceptance | vote', function(hooks) {

  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /', async function(assert) {

    await visit('/');

    assert.equal(currentURL(), '/', 'URL correct');

    assert.equal(this.element.querySelector('[data-test-title]').textContent.trim(), 'FUFF VOTE', 'Page title correct');

  });

  test('visiting / with venues', async function(assert) {

    // Access the venues in our api so we can test against
    // dynamic properties (e.g. votes)
    const dbVenues = this.server.db.venues,
      dbVenue = dbVenues[0] // this should be Thieving Harry`s;

    await visit('/');

    const venueItems = this.element.querySelectorAll('[data-test-venue-item]')

    assert.equal(venueItems.length, 10, 'Test that 10 venues are loaded');

    // assert values in the first item
    const venueItem = venueItems.item(0);

    assert.equal(venueItem.querySelector('[data-test-venue-name]').textContent.trim(), 'Thieving Harry`s', 'Name is rendered');
    assert.equal(venueItem.querySelector('[data-test-venue-cuisine]').textContent.trim(), 'Burgers, Soups & Grilled Cheese', 'Cuisine is rendered');
    assert.equal(venueItem.querySelector('[data-test-venue-url]').href, 'https://www.thievingharrys.co.uk/', 'Url is correct');
    assert.equal(venueItem.querySelector('[data-test-venue-votes]').textContent.trim(), dbVenue.votes, 'Votes are rendered');

  });

  test('visiting / and adding vote', async function(assert) {

    // Access the venues in our api so we can test against
    // dynamic properties (e.g. votes)
    const dbVenues = this.server.db.venues,
      dbVenue = dbVenues[0],
      originalVotes = dbVenue.votes; // this should be Thieving Harry`s;

    await visit('/');

    assert.equal(this.element.querySelector('[data-test-venue-item="1"] [data-test-venue-votes]').textContent.trim(), originalVotes, 'Votes are rendered');

    await click('[data-test-venue-item="1"] [data-test-venue-vote]');

    assert.equal(this.element.querySelector('[data-test-venue-item="1"] [data-test-venue-votes]').textContent.trim(), (originalVotes + 1), 'Votes have been incremented');

    // now assert that the venue in the mocked database was updated

    assert.equal(this.server.db.venues[0].votes, (originalVotes + 1), 'db votes has been updated');
  });
});