import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteGender: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this gender?')) {

        myStore.find('gender',  id).then(function(gender) {
          gender.save().then(function(){
            gender.destroyRecord();
          });
        });

      }
    }
  }
});
