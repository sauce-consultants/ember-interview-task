import {
  module,
  test
} from 'qunit';
import {
  setupRenderingTest
} from 'ember-qunit';
import {
  render
} from '@ember/test-helpers';
import {
  hbs
} from 'ember-cli-htmlbars';

module('Integration | Component | venue-item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a venue item', async function(assert) {

    this.set('venue', {
      name: 'Thieving Harry`s',
      cuisine: 'Burgers, Soups & Grilled Cheese',
      icon: 'sandwich',
      color: 'blue',
      url: 'https://www.thievingharrys.co.uk',
      votes: 42,
    });
    this.set('vote', function() {});

    await render(hbs `<VenueItem @venue={{this.venue}} @onVote={{this.vote}} />`);

    assert.equal(this.element.querySelector('[data-test-venue-name]').textContent.trim(), 'Thieving Harry`s');
    assert.equal(this.element.querySelector('[data-test-venue-votes]').textContent.trim(), 42);
    assert.equal(this.element.querySelector('[data-test-venue-cuisine]').textContent.trim(), 'Burgers, Soups & Grilled Cheese');
  });
});