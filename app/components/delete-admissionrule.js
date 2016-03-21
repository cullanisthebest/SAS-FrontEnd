import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteAdmissionrule: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this admission rule?')) {

        myStore.find('admissionrule',  id).then(function(admissionrule) {
          admissionrule.save().then(function(){
            admissionrule.destroyRecord();
          });
        });

      }
    }
  }
});
