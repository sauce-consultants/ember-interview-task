import {
  action
} from '@ember/object';
import Controller from '@ember/controller';

export default class IndexController extends Controller {

  // Actions

  @action vote(venue) {
    venue.votes++;
    venue.save();
  }
}