import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteSecondaryschool: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this high school?')) {

        myStore.find('secondaryschool',  id).then(function(secondaryschool) {
          secondaryschool.save().then(function(){
            secondaryschool.destroyRecord();
          });
        });

      }
    }
  }
});
