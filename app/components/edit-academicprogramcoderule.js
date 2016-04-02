import Ember from 'ember';

export default Ember.Component.extend({
	isProgramruleFormEditing: false,
	store: Ember.inject.service(),
	selectedProgramrule:null,

	admissionruleModel: Ember.computed(function(){
		var self = this;
		return this.get('store').findAll('admissionrule');
	}),

	actions:{
		saveProgramrule (){
			var myStore = this.get('store');
			var updatedAcademicprogramcode = myStore.peekRecord('academicprogramcode', this.get('ID'));
			var selectedProgramrule= myStore.peekRecord('admissionrule',this.get('selectedProgramrule'));
			updatedAcademicprogramcode.set('admissionrule',selectedProgramrule);
			updatedAcademicprogramcode.save().then(() => {
				this.set('isProgramruleFormEditing', false);
			});
		},

		editProgramrule () {
			this.set('isProgramruleFormEditing', true);
		},

		cancel(){
			this.set('isProgramruleFormEditing', false);
		}
	}
});
