import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteSubject: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this High School Subject?')) {

        myStore.find('highschoolsubject',  id).then(function(highschoolsubject) {
          highschoolsubject.save().then(function(){
            highschoolsubject.destroyRecord();
          });
        });

      }
    }
  }
});
