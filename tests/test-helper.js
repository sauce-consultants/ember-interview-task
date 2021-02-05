import Application from 'fuff-vote/app';
import config from 'fuff-vote/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
