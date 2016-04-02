import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteDistributionresult: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this distribution result?')) {

        myStore.find('distributionresult',  id).then(function(distributionresult) {
          distributionresult.save().then(function(){
            distributionresult.destroyRecord();
          });
        });

      }
    }
  }
});
