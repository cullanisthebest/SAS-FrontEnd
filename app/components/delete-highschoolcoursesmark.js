import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteHighschoolcoursesmark: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this high school mark?')) {

        myStore.find('highschoolcoursesmark',  id).then(function(highschoolcoursesmark) {
          highschoolcoursesmark.save().then(function(){
            highschoolcoursesmark.destroyRecord();
          });
        });

      }
    }
  }
});
