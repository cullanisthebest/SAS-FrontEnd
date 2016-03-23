import Ember from 'ember';

export default Ember.Component.extend({

	store: Ember.inject.service(),
  	isResulting: false,
  	grades: null,
  	firstname:null,
  	student:null,
  	grades:null,
  	average:null,
  	logicalExpression:null,
  	name:null,
  	itrprograms:null,


  actions: {
  	    distributeResults() {
  		    this.set('isResulting', true);
			var self = this;
			var myStore = this.get('store');
			var gradesArray = [];
			myStore.findAll('academicprogramcode');
			//gradesArray.push(1);

			//rank students by grade (haven't tested this yet..)
			this.set('student', myStore.findAll('student')).then(function(e){
				
				//iterate through students
				for (var i = 0; i < e.get('length'); i++){

					//change firstName to Average, then push
					gradesArray.push([e.objectAt(i).get('cumAvg'), e.objectAt(i).get('id')]);
				}					
				
					//sort up this homie (descending)
					gradesArray.sort(function sortFunction(a, b) {
				    	if (a[0] === b[0]) {
				        	return 0;
					    }
					    else {
					        return (a[0] > b[0]) ? -1 : 1;
					    }
					});
					//console.log(gradesArray); //gradesArray[0	][1]
					
					//var studentChoicesArr = [];
					//console.log(gradesArray);
					//console.log(gradesArray[0][1]);
					//loop from here, change hard code upper bound
					for (var allStudents = 0; allStudents < 1; allStudents++ ){
			       		myStore.query('itrprogram',{student: gradesArray[allStudents][1]}).then(function (studentChoices) {
			       			console.log(studentChoices);
			       			//iterate through the student choices
			       			for (var a = 0; a < studentChoices.get('length'); a++){
			 					
			 					//**get the id of a program and grab the entire object to get the admissionrule id**//
			 					var id = studentChoices.objectAt(a).get('academicprogramcode').get('id');
			 					var program = myStore.peekRecord('academicprogramcode', id);
			 					var admissionRuleId = program.get('admissionrule').get('id');
			 					//console.log(admissionRuleId);
			 					
			 					myStore.query('logicalexpression',{admissionrule: admissionRuleId}).then(function (expression) {
			 							for (var x = 0 ; x < expression.get('length'); x++){
			 								console.log(expression.objectAt(x).get('booleanExp'));

			 								//get the students' average
			 								//gradesArray[allStudents][1] is the current grade ID
			 								//get the students ID
			 								var studentId = gradesArray[allStudents][1];
			 								console.log(gradesArray);
			 								var student = myStore.peekRecord('student', studentId);
			 								var average = student.get('cumAvg');
			 								console.log(average);
			 								//var average = 90;
			 								//parse the logical expression

			 							}//end logical expressions
			 					});
			 				}//end studentchoices for loop
			       		})
					}//end allstudents for loop
				});
	    },

	    done() {
  		      this.set('isResulting', false);
	    },

	    
  }
});
