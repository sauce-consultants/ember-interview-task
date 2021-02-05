import Model, {
  attr
} from '@ember-data/model';

export default class VenueModel extends Model {

  @attr('string') name;
  @attr('string') icon;
  @attr('string') color;
  @attr('string') cusine;
  @attr('string') url;
  @attr('number') votes;

}