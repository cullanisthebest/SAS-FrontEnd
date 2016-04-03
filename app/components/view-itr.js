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
			myStore.findAll('itrprogram');
			myStore.query('itrprogram', {student: this.get('ID')}).then(function (itrprograms) {
				console.log(itrprograms);
				console.log(itrprograms.objectAt(0)!=undefined);
				if(itrprograms.objectAt(0)!=undefined){
					var orderedArray= new Array(10);
					for(var i=0;i<10;i++)
					{
						orderedArray[itrprograms.objectAt(i).get('order')-1]=itrprograms.objectAt(i);
					}
					self.set('itrprograms', orderedArray);
				}
			}).then(function(){
				self.set('isItrFormEditing', true);
			});
		},

		cancel () {
			this.set('isItrFormEditing', false);
		}

	}
});
