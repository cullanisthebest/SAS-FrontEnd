import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteBasis: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this Basis of Admission?')) {

        myStore.find('basisofadmission',  id).then(function(basisofadmission) {
          basisofadmission.save().then(function(){
            basisofadmission.destroyRecord();
          });
        });

      }
    }
  }
});
