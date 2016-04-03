import Ember from 'ember';

export default Ember.Component.extend({
	isItrFormEditing: false,
	store: Ember.inject.service(),
	itrModel: null,
	itrprograms: null,
	ID: null,

	actions: {

		viewItr () {
			var self = this;
			var myStore = this.get('store');
			var selectedStudent = myStore.findRecord('student', this.get('ID')).then(function(student){
				self.set('firstname', student.get('firstName'));
			});

			myStore.query('itrprogram', {student: this.get('ID')}).then(function (itrprograms) {
				console.log(itrprograms);
				self.set('itrprograms', itrprograms);
			});

			this.set('isItrFormEditing', true);
		},

		cancel () {
			this.set('isItrFormEditing', false);
		}

	}
});
