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
  	test:null,

  	studentModel: Ember.computed(function(){
    	return this.get('store').findAll('students');
  	}),
  	studentSorting: ['cumAvg:desc'],
  	sortedStudents: Ember.computed.sort('studentModel','studentSorting'),


  	actions: {
  	//     distributeResults() {
  	// 	    this.set('isResulting', true);
			// var self = this;
			// var myStore = this.get('store');
			// var gradesArray = [];
			// myStore.findAll('academicprogramcode');
			// //gradesArray.push(1);

			// //rank students by grade (haven't tested this yet..)
			// this.set('student', myStore.findAll('student')).then(function(e){
				
			// 	//iterate through students
			// 	for (var i = 0; i < e.get('length'); i++){

			// 		//change firstName to Average, then push
			// 		gradesArray.push([e.objectAt(i).get('cumAvg'), e.objectAt(i).get('id')]);
			// 	}					
				
			// 		//sort up this homie (descending)
			// 		gradesArray.sort(function sortFunction(a, b) {
			// 	    	if (a[0] === b[0]) {
			// 	        	return 0;
			// 		    }
			// 		    else {
			// 		        return (a[0] > b[0]) ? -1 : 1;
			// 		    }
			// 		});
			// 		console.log(gradesArray); //gradesArray[0][1]
					
			// 		var studentChoicesArr = [];
			// 		//loop from here, change hard code upper bound
			// 		for (var allStudents = 0; allStudents < 1; allStudents++ ){
			//        		myStore.query('itrprogram',{student: gradesArray[allStudents][1]}).then(function (studentChoices) {
			//        			//console.log(studentChoices);
			//        			//iterate through the student choices
			//        			for (var a = 0; a < studentChoices.get('length'); a++){
			 					
			//  					//**get the id of a program and grab the entire object to get the admissionrule id**//
			//  					var id = studentChoices.objectAt(a).get('academicprogramcode').get('id');
			//  					var program = myStore.peekRecord('academicprogramcode', id);
			//  					var admissionRuleId = program.get('admissionrule').get('id');
			//  					//console.log(admissionRuleId);
			 					
			//  					myStore.query('logicalexpression',{admissionrule: admissionRuleId}).then(function (expression) {
			//  							for (var x = 0 ; x < expression.get('length'); x++){
			//  								//console.log(expression.objectAt(x).get('booleanExp'));

			//  								//get the students' average
			//  								//gradesArray[allStudents][1] is the current grade ID
			//  								//get the students ID
			//  								//console.log(allStudents);
			//  								var studentId = gradesArray[allStudents][1];
			//  								//console.log(studentId);
			//  								var student = myStore.peekRecord('student', studentId);
			//  								var average = student.get('cumAvg');
			//  								//.log(average);
			//  								//var average = 90;
			//  								//parse the logical expression

			//  							}//end logical expressions
			//  					});
			//  				}//end studentchoices for loop
			//        		})
			// 		}//end allstudents for loop
			// 	});
	  //   },


  	    distributeResults() {
  		    this.set('isResulting', true);
			var self = this;
			var myStore = this.get('store');
			var gradesArray = [];
			var studentChoicesArr = [];
			var logicalExpressionArr = [];
			myStore.findAll('academicprogramcode');

			myStore.query('student', {generate: "key"}).then(function (studentChoices) {
				console.log(studentChoices);
			});

			// self.set('test', myStore.findAll('student')).then(function(e){
			// 	console.log(e.get('length'))

			// });
			// console.log(self.test.get('length'))
			// //console.log(self.test)
			//console.log(students.objectAt(0))


			//gradesArray.push(1);
			//console.log(self.test.objectAt(0));
			//rank students by grade (haven't tested this yet..)

			// for(var a = 0; a < self.sortedStudents.get('length'); a++){
			// 	myStore.query('itrprogram',{student: self.sortedStudents.objectAt(a).get('id')}).then(function (studentChoices) {
			// 		console.log(studentChoices.get('order'))
			// 	})
			// }
			


			// this.set('student', myStore.findAll('student')).then(function(e){
				
			// 	//iterate through students
			// 	for (var i = 0; i < e.get('length'); i++){

			// 		//change firstName to Average, then push
			// 		gradesArray.push([e.objectAt(i).get('cumAvg'), e.objectAt(i).get('id')]);
			// 	}					
				
			// 		//sort up this homie (descending)
			// 		gradesArray.sort(function sortFunction(a, b) {
			// 	    	if (a[0] === b[0]) {
			// 	        	return 0;
			// 		    }
			// 		    else {
			// 		        return (a[0] > b[0]) ? -1 : 1;
			// 		    }
			// 		});
					
			// 		//console.log(gradesArray);

			// 		//var studentChoicesArr = [];
			// 		//loop from here, change hard code upper bound
			// 		for (var allStudents = 0; allStudents < 2; allStudents++ ){
			//        		myStore.query('itrprogram',{student: gradesArray[allStudents][1]}).then(function (studentChoices) {
			//        			var tempArr = [];
			//        			for (var a = 0; a < studentChoices.get('length'); a++){
			//        				var id = studentChoices.objectAt(a).get('academicprogramcode').get('id');
			//  					var program = myStore.peekRecord('academicprogramcode', id);
			//  					var admissionRuleId = program.get('admissionrule').get('id');
			//        				tempArr.push(admissionRuleId);
			//  				}//end studentchoices for loop
			//  				studentChoicesArr.push(tempArr);
			//  				//console.log(studentChoicesArr[1])
			//        		})
			// 		}//end allstudents for loop
			// 		console.log(studentChoicesArr);
			// 		console.log(studentChoicesArr[0]);

			// 		//console.log(studentChoicesArr.firstObject);

			// 		// for (var one in studentChoicesArr){
			// 		// 	console.log(one);
			// 		// }

			// 		//console.log(studentChoicesArr[0]);
			// 		//console.log(studentChoicesArr.length);
			// 		// for(var ruleIndex = 0; ruleIndex < 2; ruleIndex++){
			// 		// 	var fullTempArray = [];
			// 		// 	for(var ruleSpecificIndex = 0; ruleSpecificIndex < 10; ruleSpecificIndex++){
			// 		// 		myStore.query('logicalexpression',{admissionrule: studentChoicesArr[ruleIndex][ruleSpecificIndex]}).then(function (expression) {
			// 		// 			var oneTempArray = [];
			// 		// 			for (var x = 0 ; x < expression.get('length'); x++){
			// 		// 				var exp = expression.objectAt(x).get('booleanExp')
			// 		// 				oneTempArray.push(exp);
			// 		// 			}//end logical expressions
			// 		// 			//console.log(oneTempArray);
			// 		// 			fullTempArray.push(oneTempArray);
			// 		// 		});
			// 		// 	}
			// 		// 	logicalExpressionArr.push(fullTempArray);
			// 		// }//end of ruleIndex for loop
			// 		// //console.log(logicalExpressionArr);
			// 	});
		//console.log("gradearray: ", gradesArray);
	    },


	    done() {
  		      this.set('isResulting', false);
	    },

	    
  }
});
