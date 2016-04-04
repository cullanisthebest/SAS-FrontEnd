import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isViewingSubjects: false,
  ID: null,


  highschoolsubjectModel: Ember.computed(function(){
    return this.get('store').findAll('highschoolsubject');
  }),


  actions: {
    viewSubjects() {
    
    //var self = this;
    //var myStore = this.get('store');

    /*
    var selectedSchool = myStore.findRecord('secondaryschool', this.get('ID')).then(function (school){
      self.set('schoolName', school.get('name'))
    })
	*/

	/*
    myStore.query('highschoolcoursesmark', {secondaryschool: self.get('ID')}).then(function (highschoolcoursesmarks) {
      	self.set('coursesmarks', highschoolcoursesmarks) // first one will be used in each statement
    });
	*/

    this.set('isViewingSubjects', true);
    },

    doneViewingSubjects() {
      this.set('isViewingSubjects', false);
    }

  }
});
