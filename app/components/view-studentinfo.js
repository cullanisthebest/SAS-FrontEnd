import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
	isStudentinfoFormEditing: false,
	store: Ember.inject.service(),
	ID: null,

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

			// student.get('resInfo').then(function(res){
			// 	self.set('residency', res.get('name'));
			// });

			// student.get('gender').then(function(res){
			// 	self.set('gender', res.get('name'));
			// });

			// student.get('country').then(function(res){
			// 	self.set('country', res.get('name'));
			// });

			// student.get('province').then(function(res){
			// 	self.set('province', res.get('name'));
			// });

			// student.get('city').then(function(res){
			// 	self.set('city', res.get('name'));
			// });

			// student.get('academicload').then(function(res){
			// 	self.set('academicload', res.get('name'));
			// });
		});

		this.set('isStudentinfoFormEditing', true);
	},

	cancel () {
		this.set('isStudentinfoFormEditing', false);
	}

}
});
