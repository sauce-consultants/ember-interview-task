import {
  module,
  test
} from 'qunit';
import {
  setupTest
} from 'ember-qunit';

module('Unit | Controller | index', function(hooks) {
  setupTest(hooks);

  test('vote action adds a vote to an venue', function(assert) {

    // Load controller
    let controller = this.owner.lookup('controller:index');

    // Check it's found
    assert.ok(controller, 'Controller loaded');

    // create venue fixture object
    const venue = {
      votes: 7,
      save: () => {}
    };

    // Call action
    controller.vote(venue);

    // Test it has incremented
    assert.equal(venue.votes, 8, 'Vote has incremented by 1');
  });
});