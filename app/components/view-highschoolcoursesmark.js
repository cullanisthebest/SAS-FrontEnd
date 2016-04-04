import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isViewingMarks: false,
  ID: null,

  //highschoolcoursesmarkModel: Ember.computed(function(){
  //  return this.get('store').findAll('highschoolcoursesmark');
  //}),

  actions: {
    viewMarks() {
    
    var self = this;
    var myStore = this.get('store');

    /*
    var selectedSchool = myStore.findRecord('secondaryschool', this.get('ID')).then(function (school){
      self.set('schoolName', school.get('name'))
    })
	*/

    myStore.query('highschoolcoursesmark', {secondaryschool: self.get('ID')}).then(function (highschoolcoursesmarks) {
      	self.set('coursesmarks', highschoolcoursesmarks) // first one will be used in each statement
    });

    this.set('isViewingMarks', true);
    },

    doneViewingMarks() {
      this.set('isViewingMarks', false);
    }

  }
});
