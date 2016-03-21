import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    if (this.get('oudaAuth').get('isAuthenticated')) {
       return this.store.findAll('student');
    } else {
       this.transitionTo('login');
    }
  }

});
