import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel () {
    var authentication = this.get('oudaAuth');
    var self = this;
    authentication.fetch().then(
      function (success) {
        self.transitionTo('students');
    },
      function (error) {
      console.log("error -->" + error);
    });

  }
});
