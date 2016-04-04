import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	isManagingBA: false,
	
	studentModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('student').then(function(records){
        self.set ('selectedStudent', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('student');
    }),
    
    basisofadmissioncodeModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('basisofadmissioncode').then(function(records){
        self.set ('selectedCode', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('basisofadmissioncode');
    }),

	actions:{
  		saveBA (){
      		var myStore = this.get('store');	
      		var chosenStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
      		var chosenCode = myStore.peekRecord('basisofadmissioncode', this.get ('selectedCode'));

      		var newBA = myStore.createRecord('basisofadmission', {
      			date: this.get('date'),
	          	comment: this.get('comment'),
	          	student: chosenStudent,
	          	basisCode: chosenCode,
	        });
	      	newBA.save().then(() => {
	        	this.set('isManagingBA', false);  
	      	});
    	},
		addBA(){
	  		this.set('isManagingBA', true);
		},

		cancelBA(){
			this.set('isManagingBA', false);
		}
	}
});
