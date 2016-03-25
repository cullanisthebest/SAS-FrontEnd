import Ember from 'ember';

export default Ember.Component.extend({

	store: Ember.inject.service(),

  	// studentModel: Ember.computed(function(){
   //  	return this.get('store').findAll('student');
  	// }),

   //  coursecodeModel: Ember.computed(function(){
   //    return this.get('store').findAll('coursecode');
   //  }),

   //  gradeModel: Ember.computed(function(){
   //    return this.get('store').findAll('grade');
   //  }),

   //  itrprogramModel: Ember.computed(function(){
   //    return this.get('store').findAll('itrprogram');
   //  }),

   //  academicprogramcodeModel: Ember.computed(function(){
   //    return this.get('store').findAll('academicprogramcode');
   //  }),

   //  admissionruleModel: Ember.computed(function(){
   //    return this.get('store').findAll('admissionrule');
   //  }),

   //  logicalexpressionModel: Ember.computed(function(){
   //    return this.get('store').findAll('logicalexpression');
   //  }),

  	actions: {
	  	    distributeResults() 
          {
            this.set('isResulting', true);
            var output;
            var self = this;
            var myStore = this.get('store');
            myStore.queryRecord('student', {generate: "key"}).then(function (e) {
            output=e.get('number');
          }).then(function(){
            if(out.innerText === undefined) out.textContent = output;
            else out.innerText = output;
            }
          );

	  		   //  this.set('isResulting', true);
				    // var self = this;
        //     var allStudents=this.get('studentModel').toArray();
        //     var allCoursecodes=this.get('coursecodeModel').toArray();
        //     var allGrades=this.get('gradeModel').toArray();
        //     var allItrprograms=this.get('itrprogramModel').toArray();
        //     var allAcademicprogramcodes=this.get('academicprogramcodeModel').toArray();
        //     var allAdmissionrules=this.get('admissionruleModel').toArray();
        //     var allLogicalExpressions=this.get('logicalexpressionModel').toArray();

        //     // Ember.Logger.log(allStudents);
        //     // console.log(allStudents.length);

        //     // Ember.Logger.log(allCoursecodes);
        //     // console.log(allCoursecodes.length);

        //     // Ember.Logger.log(allGrades);
        //     // console.log(allGrades.length);

        //     // Ember.Logger.log(allAcademicprogramcodes);
        //     // console.log(allAcademicprogramcodes.length);

        //     // Ember.Logger.log(allAdmissionrules);
        //     // console.log(allAdmissionrules.length);

        //     // Ember.Logger.log(allLogicalExpressions);
        //     // console.log(allLogicalExpressions.length);
            
        //     //first sort the students by admissionaverage insertionsort

        //     //pull everything from students you will need
        //     var cleanedStudents=new Array(allStudents.length);
        //     for(var i=0;i<allStudents.length;i++)
        //     {
        //       cleanedStudents[i]=new Array(3);
        //       cleanedStudents[i][0]=allStudents[i].get('id');
        //       cleanedStudents[i][1]=allStudents[i].get('number');
        //       cleanedStudents[i][2]=allStudents[i].get('cumAvg');
        //       if(cleanedStudents[i][2]=="")
        //       {
        //         console.log("FOUND A NULL");
        //         cleanedStudents[i][2]=0;
        //       }
        //     }

        //     //insertion sort
        //     for(var i = 0; i < cleanedStudents.length; i++) 
        //     {
        //       //console.log("In loop1 on student: "+i);
        //       var tmp = cleanedStudents[i];
        //       for(var j = i - 1; j >= 0 && (parseFloat(cleanedStudents[j][2]) < parseFloat(tmp[2])); j--) 
        //       {
        //         cleanedStudents[j+1] = cleanedStudents[j];
        //       }
        //       cleanedStudents[j+1] = tmp;
        //     }

        //     var cleanedAcademicprogramcodes=new Array(allAcademicprogramcodes.length);
        //     for(var i=0;i<allAcademicprogramcodes.length;i++)
        //     {
        //       cleanedAcademicprogramcodes[i]=new Array(2);
        //       cleanedAcademicprogramcodes[i][0]=allAcademicprogramcodes[i].get('id');
        //       cleanedAcademicprogramcodes[i][1]=allAcademicprogramcodes[i].get('name');
        //       console.log(cleanedAcademicprogramcodes[i]);
        //     }

        //     //find all itrprograms
        //     console.log(allItrprograms[0].get('academicprogramcode'));
        //     var cleanedItr=new Array(allItrprograms.length);
        //     for(var i=0;i<allItrprograms.length;i++)
        //     {
        //       cleanedItr[i]=new Array(6);
        //       cleanedItr[i][0]=allItrprograms[i].get('student').get('id');
        //       cleanedItr[i][1]=allItrprograms[i].get('order');
        //       cleanedItr[i][2]=allItrprograms[i].get('academicprogramcode').get('id');
        //     }
        //     //index 0 - studentNum, 1-rank, 2-academicprogramcodeid
        //       // var done=false;
        //       // for(var j=0;j<allAcademicprogramcodes.length;j++)
        //       // {
        //       //   if(!done)
        //       //   {
        //       //     if(cleanedItr[i][2]=allAcademicprogramcodes[j].get('id'))
        //       //     {
        //       //       cleanedItr[i][3]=allAcademicprogramcodes[j].get('admissionrule').get('id');
        //       //       cleanedItr[i][5]=allAcademicprogramcodes[j].get('name');
                    
        //       //       for(var p=0;p<allLogicalExpressions.length;p++)
        //       //       {
        //       //           if(cleanedItr[i][3]=allLogicalExpressions[p].get('admissionrule').get('id'))
        //       //           {
        //       //             cleanedItr[i][4]=allLogicalExpressions[p].get('booleanExp');
        //       //             done=true;
        //       //           }
        //       //       }
        //       //     }
        //       //   }
        //       // }

        //     //print
        //     for(var i=0;i<cleanedItr.length;i++)
        //     {
        //       console.log(cleanedItr[i]);
        //     }

        //     ////go through each student
        //     // for(var i=0;i<cleanedStudents.length;i++)
        //     // {
        //     //   //find their Itrprograms
        //     //   var havelist=false;
        //     //   var notPlaced=true;
        //     //   //console.log(cleanedStudents[i][1]);
        //     //   for(var q=0;q<cleanedItr.length;q++)
        //     //   {
        //     //     console.log(cleanedItr[q][5]);
        //     //     if(notPlaced)
        //     //     {
        //     //       if(cleanedItr[q][0]==cleanedStudents[i][0])
        //     //       {
        //     //         //check if they are eligible
        //     //         notPlaced=false;
        //     //         console.log("Student Number: "+cleanedStudents[i][1]+ "- Rank: "+cleanedItr[q][1]+"- Program: "+cleanedItr[q][5]+" - Exp:"+cleanedItr[q][5]);
        //     //       }
        //     //     }
        //     //   }
        //     // }
			   },


		    done() {
				     this.set('isResulting', false);
		    },

	    
  }
});