import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingLogicalExpression: false,
  isAddingTologicalExpression1: false,
  isAddingTologicalExpression2: false,
  isAddingTologicalExpression3: false,
  isAddingTologicalExpression4: false,
  isAddingTologicalExpression5: false,
  isAddingTologicalExpression6: false,
  isAddingTologicalExpression7: false,
  isAddingTologicalExpression8: false,
  isAddingTologicalExpression9: false,
  isAddingTologicalExpression10: false,
  isAddingTologicalExpression11: false,


  admissionruleModel: Ember.computed(function(){
    var self = this;
    this.get('store').findAll('admissionrule').then(function(records){
      self.set ('selectedAdmissionrule', records.get('firstObject').get('id'));
    });
    return this.get('store').findAll('admissionrule');
  }),

  coursecodeModel: Ember.computed(function(){
    var self = this;
    this.get('store').findAll('coursecode').then(function(records){
      self.set ('selectedCoursecode', records.get('firstObject').get('id'));
    });
    return this.get('store').findAll('coursecode');
  }),

  actions: {
    saveLogicalExpression (){
      //var wholeExp = ""
      var myStore = this.get('store');
      var chosenCourse = 'AVG';
      var chosenCourseNum = "";  
      if(this.get('selectedCoursecode')!='AVG'){
          var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode'));
          chosenCourse = chosen.get('code');
          chosenCourseNum = chosen.get('number');
      }
      var wholeExp = "".concat(
        document.getElementById('openBracket').value," ",
        chosenCourse," ",
        chosenCourseNum," ",
        document.getElementById('inequality').value," ",
        this.get('val')," ",
        document.getElementById('closeBracket').value," ");

      if(this.isAddingTologicalExpression1==true){
        var chosenCourse1 = 'AVG';
        var chosenCourseNum1 = "";  
        if(this.get('selectedCoursecode1')!='AVG'){
            var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode1'));
            chosenCourse1 = chosen.get('code');
            chosenCourseNum1 = chosen.get('number');
        }
        
        wholeExp=wholeExp.concat(
          document.getElementById('AndOr').value," ",
          document.getElementById('openBracket1').value," ",
          chosenCourse1," ",
          chosenCourseNum1," ",
          document.getElementById('inequality1').value," ",
          this.get('val1')," ",
          document.getElementById('closeBracket1').value," ");

        if(this.isAddingTologicalExpression2==true){
          var chosenCourse2 = 'AVG';
          var chosenCourseNum2 = "";  
          if(this.get('selectedCoursecode2')!='AVG'){
              var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode2'));
              chosenCourse2 = chosen.get('code');
              chosenCourseNum2 = chosen.get('number');
          }
          wholeExp=wholeExp.concat(
            document.getElementById('AndOr1').value," ",
            document.getElementById('openBracket2').value," ",
            chosenCourse2," ",
            chosenCourseNum2," ",
            document.getElementById('inequality2').value," ",
            this.get('val2')," "," ",
            document.getElementById('closeBracket2').value," ");

          if(this.isAddingTologicalExpression3==true){
            var chosenCourse3 = 'AVG';
            var chosenCourseNum3 = "";  
            if(this.get('selectedCoursecode3')!='AVG'){
              var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode3'));
              chosenCourse3 = chosen.get('code');
              chosenCourseNum3 = chosen.get('number');
            }
            wholeExp=wholeExp.concat(
              document.getElementById('AndOr2').value," ",
              document.getElementById('openBracket3').value," ",
              chosenCourse3," ",
              chosenCourseNum3," ",
              document.getElementById('inequality3').value," ",
              this.get('val3')," "," ",
              document.getElementById('closeBracket3').value," ");

            if(this.isAddingTologicalExpression4==true){
              var chosenCourse4 = 'AVG';
              var chosenCourseNum4 = "";  
              if(this.get('selectedCoursecode4')!='AVG'){
                  var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode4'));
                  chosenCourse4 = chosen.get('code');
                  chosenCourseNum4 = chosen.get('number');
              }
              wholeExp=wholeExp.concat(
                document.getElementById('AndOr3').value," ",
                document.getElementById('openBracket4').value," ",
                chosenCourse4," ",
                choseCourseNum4," ",
                document.getElementById('inequality4').value," ",
                this.get('val4')," ",
                document.getElementById('closeBracket4').value," ");

              if(this.isAddingTologicalExpression5==true){
                var chosenCourse5 = 'AVG';
                var chosenCourseNum5 = "";  
                if(this.get('selectedCoursecode5')!='AVG'){
                    var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode5'));
                    chosenCourse5 = chosen.get('code');
                    chosenCourseNum5 = chosen.get('number');
                }
                
                wholeExp=wholeExp.concat(
                  document.getElementById('AndOr4').value," ",
                  document.getElementById('openBracket5').value," ",
                  chosenCourse5," ",
                  chosenCourseNum5," ",
                  document.getElementById('inequality5').value," ",
                  this.get('val5')," ",
                  document.getElementById('closeBracket5').value," ");

                if(this.isAddingTologicalExpression6==true){
                  var chosenCourse6 = 'AVG';
                  var chosenCourseNum6 = "";  
                  if(this.get('selectedCoursecode6')!='AVG'){
                      var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode6'));
                      chosenCourse6 = chosen.get('code');
                      chosenCourseNum6 = chosen.get('number');
                  }
                  wholeExp=wholeExp.concat(
                    document.getElementById('AndOr5').value," ",
                    document.getElementById('openBracket6').value," ",
                    chosenCourse6," ",
                    chosenCourseNum6," ",
                    document.getElementById('inequality6').value," ",
                    this.get('val6')," ",
                    document.getElementById('closeBracket6').value," ");

                  if(this.isAddingTologicalExpression7==true){
                    var chosenCourse7 = 'AVG';
                    var chosenCourseNum7 = "";  
                    if(this.get('selectedCoursecode7')!='AVG'){
                        var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode7'));
                        chosenCourse7 = chosen.get('code');
                        chosenCourseNum7 = chosen.get('number');
                    }
                    wholeExp=wholeExp.concat(
                      document.getElementById('AndOr6').value," ",
                      document.getElementById('openBracket7').value," ",
                      chosenCourse7," ",
                      chosenCourseNum7," ",
                      document.getElementById('inequality7').value," ",
                      this.get('val7')," ",
                      document.getElementById('closeBracket7').value," ");

                    if(this.isAddingTologicalExpression8==true){
                      var chosenCourse8 = 'AVG';
                      var chosenCourseNum8 = "";  
                      if(this.get('selectedCoursecode8')!='AVG'){
                          var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode8'));
                          chosenCourse8 = chosen.get('code');
                          chosenCourseNum8 = chosen.get('number');
                      }
                      wholeExp=wholeExp.concat(
                        document.getElementById('AndOr7').value," ",
                        document.getElementById('openBracket8').value," ",
                        chosenCourse8," ",
                        chosenCourseNum8," ",
                        document.getElementById('inequality8').value," ",
                        this.get('val8')," ",
                        document.getElementById('closeBracket8').value," ");

                      if(this.isAddingTologicalExpression9==true){
                        var chosenCourse9 = 'AVG';
                        var chosenCourseNum9 = "";  
                        if(this.get('selectedCoursecode9')!='AVG'){
                            var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode9'));
                            chosenCourse9 = chosen.get('code');
                            chosenCourseNum9 = chosen.get('number');
                        }
                        wholeExp=wholeExp.concat(
                          document.getElementById('AndOr8').value," ",
                          document.getElementById('openBracket9').value," ",
                          chosenCourse9," ",
                          chosenCourseNum9," ",
                          document.getElementById('inequality9').value," ",
                          this.get('val9')," ",
                          document.getElementById('closeBracket9').value," ");

                        if(this.isAddingTologicalExpression10==true){
                          var chosenCourse10 = 'AVG';
                          var chosenCourseNum10 = "";  
                          if(this.get('selectedCoursecode10')!='AVG'){
                              var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode10'));
                              chosenCourse10 = chosen.get('code');
                              chosenCourseNum10 = chosen.get('number');
                          }                         
                          wholeExp=wholeExp.concat(
                            document.getElementById('AndOr9').value," ",
                            document.getElementById('openBracket10').value," ",
                            chosenCourse10," ",
                            chosenCourseNum10," ",
                            document.getElementById('inequality10').value," ",
                            this.get('val10')," "," ",
                            document.getElementById('closeBracket6').value," ");

                          if(this.isAddingTologicalExpression11==true){
                            var chosenCourse11 = 'AVG';
                            var chosenCourseNum11 = "";  
                            if(this.get('selectedCoursecode11')!='AVG'){
                                var chosen = myStore.peekRecord('coursecode', this.get ('selectedCoursecode11'));
                                chosenCourse11 = chosen.get('code');
                                chosenCourseNum11 = chosen.get('number');
                            }
                            wholeExp=wholeExp.concat(
                              document.getElementById('AndOr10').value," ",
                              document.getElementById('openBracket11').value," ",
                              chosenCourse11," ",
                              chosenCourseNum11," ",
                              document.getElementById('inequality11').value," ",
                              this.get('val11')," ",
                              document.getElementById('closeBracket11').value," ");
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
// }




var chosenAdmissionrule = myStore.peekRecord('admissionrule', this.get ('selectedAdmissionrule'));
Ember.Logger.log(wholeExp);   
var newLogicalExpression = myStore.createRecord('logicalexpression', {
  booleanExp: wholeExp,
logicalLink: "link",//this.get('link'), //WHAT GOES HERE?? 
admissionrule: chosenAdmissionrule
});
newLogicalExpression.save().then(() => {
  this.set('isManagingLogicalExpression', false);
  this.set('isAddingTologicalExpression1', false);
  this.set('isAddingTologicalExpression2', false);
  this.set('isAddingTologicalExpression3', false);
  this.set('isAddingTologicalExpression4', false);
  this.set('isAddingTologicalExpression5', false);
  this.set('isAddingTologicalExpression6', false);
  this.set('isAddingTologicalExpression7', false);
  this.set('isAddingTologicalExpression8', false);
  this.set('isAddingTologicalExpression9', false);
  this.set('isAddingTologicalExpression10', false);
  this.set('isAddingTologicalExpression11', false);
});
},

cancelLogicalExpression() {
  this.set('isManagingLogicalExpression', false);
  this.set('isAddingTologicalExpression1', false);
  this.set('isAddingTologicalExpression2', false);
  this.set('isAddingTologicalExpression3', false);
  this.set('isAddingTologicalExpression4', false);
  this.set('isAddingTologicalExpression5', false);
  this.set('isAddingTologicalExpression6', false);
  this.set('isAddingTologicalExpression7', false);
  this.set('isAddingTologicalExpression8', false);
  this.set('isAddingTologicalExpression9', false);
  this.set('isAddingTologicalExpression10', false);
  this.set('isAddingTologicalExpression11', false);
},

manageLogicalExpression() {
  this.set('isManagingLogicalExpression', true); 
},
addtoLogicalExpression1(){
  this.set('isAddingTologicalExpression1', true);
},
addtoLogicalExpression2(){
  this.set('isAddingTologicalExpression2', true);
},
addtoLogicalExpression3(){
  this.set('isAddingTologicalExpression3', true);
},
addtoLogicalExpression4(){
  this.set('isAddingTologicalExpression4', true);
},
addtoLogicalExpression5(){
  this.set('isAddingTologicalExpression5', true);
},
addtoLogicalExpression6(){
  this.set('isAddingTologicalExpression6', true);
},
addtoLogicalExpression7(){
  this.set('isAddingTologicalExpression7', true);
},
addtoLogicalExpression8(){
  this.set('isAddingTologicalExpression8', true);
},
addtoLogicalExpression9(){
  this.set('isAddingTologicalExpression9', true);
},
addtoLogicalExpression10(){
  this.set('isAddingTologicalExpression10', true);
},
addtoLogicalExpression11(){
  this.set('isAddingTologicalExpression11', true);
},
addLogicalExpression() {
  this.set('isManagingLogicalExpression', true);
},
doneLogicalExpression(){
  this.set('isManagingLogicalExpression', false);
  this.set('isAddingTologicalExpression1', false);
  this.set('isAddingTologicalExpression2', false);
  this.set('isAddingTologicalExpression3', false);
  this.set('isAddingTologicalExpression4', false);
  this.set('isAddingTologicalExpression5', false);
  this.set('isAddingTologicalExpression6', false);
  this.set('isAddingTologicalExpression7', false);
  this.set('isAddingTologicalExpression8', false);
  this.set('isAddingTologicalExpression9', false);
  this.set('isAddingTologicalExpression10', false);
  this.set('isAddingTologicalExpression11', false);
}
}
});