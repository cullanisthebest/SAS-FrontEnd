import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteAcademicload: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this academic load?')) {

        myStore.find('academicload',  id).then(function(academicload) {
          //city.set('students', null); // repeat this line for all connected lookup tables
           //city.set('province', null);
          academicload.save().then(function(){
            academicload.destroyRecord();
          });
        });

      }
    }
  }
});
