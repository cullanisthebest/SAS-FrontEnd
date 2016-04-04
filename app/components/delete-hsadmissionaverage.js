import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteAverages: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you want to delete these High School Admission Averages?')) {

        myStore.find('highschooladmissionaverage', id).then(function(highschooladmissionaverage) {
          highschooladmissionaverage.save().then(function(){
            highschooladmissionaverage.destroyRecord();
          });
        });

      }
    }
  }
});
