import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteProgramadministration: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this program?')) {

        myStore.find('programadministration',  id).then(function(programadministration) {
          programadministration.save().then(function(){
            programadministration.destroyRecord();
          });
        });

      }
    }
  }
});
