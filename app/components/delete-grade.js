import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteGrade: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this grade?')) {

        myStore.find('grade',  id).then(function(grade) {
          //grade.set('student', null); // repeat this line for all connected lookup tables
          grade.save().then(function(){
            grade.destroyRecord();
          });
        });

      }
    }
  }
});
