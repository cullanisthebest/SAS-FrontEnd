import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	isManagingHSAverage: false,
	
	studentModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('student').then(function(records){
        self.set ('selectedStudent', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('student');
    }),

  	actions:{
  		saveHSAvg (){
      		var myStore = this.get('store');
      		var chosenStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
			
      		var newHS = myStore.createRecord('highschooladmissionaverage', {
	          first: this.get('first'),
	          midYear: this.get('mid'),
	          _final: this.get('fin'),
	          grade11: this.get('eleven'),
	          student: chosenStudent,
	        });

	      	newHS.save().then(() => {
	        	this.set('isManagingHSAverage', false);  
	      	});
    	},
		addHSAvg(){
	  		this.set('isManagingHSAverage', true);
		},

		cancelHSAvg(){
			this.set('isManagingHSAverage', false);
		}
	}
});

