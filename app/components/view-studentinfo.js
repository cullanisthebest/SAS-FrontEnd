import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
	isStudentinfoFormEditing: false,
	isViewingSecodarySchoolInfo: false,
	store: Ember.inject.service(),
	ID: null,
	schools: null,

actions: {

	viewStudentinfo () {
		var self = this;
		var myStore = this.get('store');

		myStore.findAll('residency');
		myStore.findAll('gender');
		myStore.findAll('country');
		myStore.findAll('province');
		myStore.findAll('city');
		myStore.findAll('academicload');

		myStore.findRecord('student', this.get('ID')).then(function (student) {

			self.set('oneStudent', student);

			self.set('firstname', student.get('firstName'));
			self.set('lastname', student.get('lastName'));
			self.set('number', student.get('number'));
			self.set('dob', student.get('DOB'));
		});

	// Get the secondary school info
		myStore.query('secondaryschool', {student: self.get('ID')}).then(function(schoolRecords){
              self.set('schools', schoolRecords);
          });

		myStore.query('highschooladmissionaverage', {student: self.get('ID')}).then(function(highschooladmissionaverage){

			//	var oneHSavg = highschooladmissionaverage.objectAt(0);
              //self.set('hsavg', oneHSavg);
             self.set('avgs', highschooladmissionaverage)

              /*self.set('midYear', oneHSavg.get('midYear'));
              self.set('last', oneHSavg.get('_final'));
              self.set('grade11', oneHSavg.get('grade11'));*/
              //Ember.Logger.log(oneHSavg.get('midYear'));
        });
        myStore.query('basisofadmission', {student: self.get('ID')}).then(function(basisofadmission){

			//	var oneBasis = basisofadmission.objectAt(0);
             // self.set('basis', oneBasis.get('basisCode'));
            self.set('admissions', basisofadmission);
              
              //Ember.Logger.log(oneHSavg.get('midYear'));
        });

        myStore.query('scholarandawardcode', {student: self.get('ID')}).then(function(award){
            self.set('awards', award);
        });

		this.set('isStudentinfoFormEditing', true);
	},

	viewSSInfo () {
		this.set('isViewingSecodarySchoolInfo', true);
	},

	hideSSInfo () {
		this.set('isViewingSecodarySchoolInfo', false);
	},
	
	cancel () {
		this.set('isStudentinfoFormEditing', false);
	}

}
});
