import Ember from 'ember';

export default Ember.Component.extend({
  isManagingProgram: false,
  store: Ember.inject.service(),
  selectedAcademicprogramcode:null,


    admissionruleModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('admissionrule').then(function(records){
        self.set ('selectedAdmissionrule', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('admissionrule');
    }),

/*ALAN ADDED*/
    academicprogramcodeModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('academicprogramcode').then(function(records){
        self.set ('selectedAcademicprogramcode', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('academicprogramcode');
    }),

         // var selectedAcademicprogramcode = myStore.peekRecord('academicprogramcode', this.get ('selectedAcademicprogramcode'));

/*END ADDED*/

  actions: {
    saveP(){
      var myStore = this.get('store');
      var chosenAdmissionrule = myStore.peekRecord('admissionrule', this.get ('selectedAdmissionrule'));
      
      //console.log(this.get ('selectedAcademicprogramcode'));

      /*ALAN ADDED*/
       var selectedAcademicprogramcode = myStore.peekRecord('academicprogramcode', this.get ('selectedAcademicprogramcode'));
      /*END ADDED*/

      selectedAcademicprogramcode.set('admissionrule', chosenAdmissionrule);

      //console.log(this.get ('selectedAcademicprogramcode'));//id 
      //console.log(selectedAcademicprogramcode.get('id'));//id same


      /*need to change this code below to update the program with the new admission rule. This is not showing in my db..*/
     /* var newProgram = myStore.createRecord('academicprogramcode', {
        name:  selectedAcademicprogramcode.get('name'), //this.get('name'), ALAN ADDED
        admissionrule: chosenAdmissionrule
      });*/

      selectedAcademicprogramcode.save().then(() => {
        this.set('isManagingProgram', false);
      });

    },
    cancel() {
      this.set('isManagingProgram', false);
    },

    addProgram() {
      this.set('isManagingProgram', true);
    },
    doneProgram(){
      this.set('isManagingProgram', false);
    }

  }
});