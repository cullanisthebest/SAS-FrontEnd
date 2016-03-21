import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteFaculty: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete this faculty?')) {

        myStore.find('faculty',  id).then(function(faculty) {
          faculty.save().then(function(){
            faculty.destroyRecord();
          });
        });

      }
    }
  }
});
