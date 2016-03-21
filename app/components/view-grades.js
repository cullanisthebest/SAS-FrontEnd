import Ember from 'ember';

export default Ember.Component.extend({
	isGradesFormEditing: false,
	store: Ember.inject.service(),
	gradeModel: null,
	grades: null,
	ID: null,

	actions: {

		viewGrades () {
			var self = this;
			var myStore = this.get('store');
			myStore.findAll('coursecode');
			var selectedStudent = myStore.findRecord('student', this.get('ID')).then(function(student){
				self.set('firstname', student.get('firstName'));
			});

			myStore.query('grade', {student: this.get('ID')}).then(function (grades) {
				console.log(grades);
				self.set('grades', grades);
			});

			this.set('isGradesFormEditing', true);
		},

		updateGrade: function(gradeID){
			console.log(gradeID);
			console.log(this.get('gradeID'))
			var self = this;
			var myStore = this.get('store');
			var selectedGrade = myStore.findRecord('grade', gradeID).then(function(grade){
				console.log(grade);
				grade.set('mark', self.get('newGrade'));
				grade.save();
			});
		},

		cancel () {
			this.set('isGradesFormEditing', false);
		}

	}
});
