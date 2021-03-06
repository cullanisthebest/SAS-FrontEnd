import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteDepartment: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this department?')) {

        myStore.find('department',  id).then(function(department) {
          department.save().then(function(){
            department.destroyRecord();
          });
        });

      }
    }
  }
});
