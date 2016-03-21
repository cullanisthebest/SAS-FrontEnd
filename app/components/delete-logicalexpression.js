import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteLogicalexpression: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this logical expression?')) {

        myStore.find('logicalexpression',  id).then(function(logicalexpression) {
          logicalexpression.save().then(function(){
            logicalexpression.destroyRecord();
          });
        });

      }
    }
  }
});
