import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isCompleteDistribution: false,
  isDistributionInProgress: false,
  students: null,
  grades: null,
  ID: null,
  coursecode: null,

  model: Ember.computed(function(){
      var self = this;
      var students = this.get('store').findAll('student');

      console.log("STUDENTS: " + students); // Returns a promise array

      // TODO: Sort and display students based on avg (desc)

	 // using a custom sort function
	 //sortedStudents: Ember.computed.sort('students', function(a, b){
	 //	  if (a.avg > b.avg) {
	 //     return 1;
	 //   } else if (a.avg < b.avg) {
	 //     return -1;
	 //   }

	 //   return 0;
	 // })

      return students;
    }),


  actions: {
    distributeStudents() {
      this.set('isDistributionInProgress', true);

        // IN PROGRESS

        var self = this; // Maintain reference to this javascript file when doing queries (i.e the function call below will assign this = grades)
		var myStore = this.get('store');

		this.set('student', myStore.findAll('student')).then(function(e){
			//for(i= 0; i < i, )

			// TODO: Sort array based on avg
			//self.set('students', self.set(e));
			console.log(e) // e is NOT a Promise Array, but another form of array

			self.set('ID',e.objectAt(0).get('id'));

			console.log("ID: " + self.get('ID'));
			console.log("Number: " + e.objectAt(0).get('number'));
			console.log(e.objectAt(0).get('firstName'));
			console.log(e.objectAt(0).get('lastName'));

			myStore.query('grade', {student: self.get('ID')}).then(function (grades) {
				self.set('grades', grades);
				self.set('coursecode', grades.objectAt(0).get('coursecode'));
				console.log("Grade 0, coursecode: " + self.get('coursecode'));
				console.log("Grade 0, coursecode ID: " + self.get('coursecode').get('id'));

				self.set('coursecodeID', self.get('coursecode').get('id'));

				console.log("Grade 0, coursecode number: " + self.get('coursecode').get('number'));
				console.log("Grade 0, coursecode name: " + self.get('coursecode').get('name'));
				console.log("Grade 0, mark: " + grades.objectAt(0).get('mark'));

				myStore.findRecord('coursecode', self.get('coursecode').get('id')).then(function (coursecode) {
					console.log("coursecode: " + coursecode);
					console.log("coursecode name: " + coursecode.get('name'));
					console.log("coursecode number: " + coursecode.get('number'));
				});		
						
			});
		})

		
		// END IN PROGRESS
    },

    distributionComplete() {
    	this.set('isCompleteDistribution', true);
    	this.set('isDistributionInProgress', false);
    },

    saveResults() {
    	// TODO: SAVE THE RESULTS IN THE DATABASE
    },

    cancel()
    {
    	this.set('isCompleteDistribution', false);
    	this.set('isDistributionInProgress', false);
    }
  }
});
