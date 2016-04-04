import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteAward: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this award?')) {

        myStore.find('scholarandawardcode',  id).then(function(scholarandawardcode) {
          scholarandawardcode.save().then(function(){
            scholarandawardcode.destroyRecord();
          });
        });

      }
    }
  }
});
