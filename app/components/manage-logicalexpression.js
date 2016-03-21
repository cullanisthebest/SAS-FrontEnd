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
      var myStore = this.get('store');
      var chosenCourse = myStore.peekRecord('coursecode', this.get ('selectedCoursecode'));

      var wholeExp = "".concat(
        document.getElementById('openBracket').value,
        chosenCourse.get('code'),
        document.getElementById('inequality').value,
        this.get('val'),
        document.getElementById('closeBracket').value);
// if(isAddingToLogicalExpression==true){
  if(this.isAddingTologicalExpression1==true){
    var chosenCourse1 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode1'));
    wholeExp=wholeExp.concat(
      document.getElementById('AndOr').value,
    document.getElementById('openBracket1').value,
    chosenCourse1.get('code'),
    document.getElementById('inequality1').value,
    this.get('val1'),
    document.getElementById('closeBracket1').value);

      if(this.isAddingTologicalExpression2==true){
        var chosenCourse2 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode2'));
        wholeExp=wholeExp.concat(
          document.getElementById('AndOr1').value,
          document.getElementById('openBracket2').value,
          chosenCourse2.get('code'),
          document.getElementById('inequality2').value,
          this.get('val2'),
          document.getElementById('closeBracket2').value);

        if(this.isAddingTologicalExpression3==true){
          var chosenCourse3 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode3'));
          wholeExp=wholeExp.concat(
            document.getElementById('AndOr2').value,
            document.getElementById('openBracket3').value,
            chosenCourse3.get('code'),
            document.getElementById('inequality3').value,
            this.get('val3'),
            document.getElementById('closeBracket3').value);

          if(this.isAddingTologicalExpression4==true){
            var chosenCourse4 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode4'));
            wholeExp=wholeExp.concat(
              document.getElementById('AndOr3').value,
              document.getElementById('openBracket4').value,
              chosenCourse4.get('code'),
              document.getElementById('inequality4').value,
              this.get('val4'),
              document.getElementById('closeBracket4').value);

            if(this.isAddingTologicalExpression5==true){
              var chosenCourse5 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode5'));
              wholeExp=wholeExp.concat(
                document.getElementById('AndOr4').value,
                document.getElementById('openBracket5').value,
                chosenCourse5.get('code'),
                document.getElementById('inequality5').value,
                this.get('val5'),
                document.getElementById('closeBracket5').value);

              if(this.isAddingTologicalExpression6==true){
                var chosenCourse6 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode6'));
                wholeExp=wholeExp.concat(
                  document.getElementById('AndOr5').value,
                  document.getElementById('openBracket6').value,
                  chosenCourse6.get('code'),
                  document.getElementById('inequality6').value,
                  this.get('val6'),
                  document.getElementById('closeBracket6').value);

                if(this.isAddingTologicalExpression7==true){
                  var chosenCourse7 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode7'));
                  wholeExp=wholeExp.concat(
                    document.getElementById('AndOr6').value,
                    document.getElementById('openBracket7').value,
                    chosenCourse7.get('code'),
                    document.getElementById('inequality7').value,
                    this.get('val7'),
                    document.getElementById('closeBracket7').value);

                  if(this.isAddingTologicalExpression8==true){
                    var chosenCourse8 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode8'));
                    wholeExp=wholeExp.concat(
                      document.getElementById('AndOr7').value,
                      document.getElementById('openBracket8').value,
                      chosenCourse8.get('code'),
                      document.getElementById('inequality8').value,
                      this.get('val8'),
                      document.getElementById('closeBracket8').value);

                    if(this.isAddingTologicalExpression9==true){
                      var chosenCourse9 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode9'));
                      wholeExp=wholeExp.concat(
                        document.getElementById('AndOr8').value,
                        document.getElementById('openBracket9').value,
                        chosenCourse9.get('code'),
                        document.getElementById('inequality9').value,
                        this.get('val9'),
                        document.getElementById('closeBracket9').value);

                      if(this.isAddingTologicalExpression10==true){
                        var chosenCourse10= myStore.peekRecord('coursecode', this.get ('selectedCoursecode10'));
                        wholeExp=wholeExp.concat(
                          document.getElementById('AndOr9').value,
                          document.getElementById('openBracket10').value,
                          chosenCourse10.get('code'),
                          document.getElementById('inequality10').value,
                          this.get('val10'),
                          document.getElementById('closeBracket6').value);

                        if(this.isAddingTologicalExpression11==true){
                          var chosenCourse11 = myStore.peekRecord('coursecode', this.get ('selectedCoursecode11'));
                          wholeExp=wholeExp.concat(
                            document.getElementById('AndOr10').value,
                            document.getElementById('openBracket11').value,
                            chosenCourse11.get('code'),
                            document.getElementById('inequality11').value,
                            this.get('val11'),
                            document.getElementById('closeBracket11').value);
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