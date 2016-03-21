import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('students');
  this.route('login', {path: '/'});
  this.route('adminPortal');
  this.route('home');
  this.route('user');
});

export default Router;
