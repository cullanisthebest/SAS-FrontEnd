import Ember from 'ember';

export default Ember.Component.extend({
	isProgramplacementFormEditing: false,
	store: Ember.inject.service(),
	selectedAcademicprogramcode:null,
	placementID: null,
	programplacementModel: null,
	selectedAcademicprogramcode: null,

	academicprogramcodeModel: Ember.computed(function(){
		var self = this;
		return this.get('store').findAll('academicprogramcode');
	}),

	actions:{
		saveProgramplacement (){
			var myStore = this.get('store');
			var updatedProgramplacement = myStore.peekRecord('programplacement', this.get('ID'));
			var selectedAcademicprogramcode= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode'));
			updatedProgramplacement.set('academicprogramcode',selectedAcademicprogramcode);
			updatedProgramplacement.save().then(() => {
				updatedProgramplacement.set('choice', "Modified");
				updatedProgramplacement.save().then(() => {
					this.set('isProgramplacementFormEditing', false);
				});
			});
		},

		editProgramplacement () {
			this.set('isProgramplacementFormEditing', true);
		},

		cancel(){
			this.set('isProgramplacementFormEditing', false);
		}
	}
});
