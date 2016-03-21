import Ember from 'ember';

export default Ember.Component.extend({
  isManagingProgram: false,
  store: Ember.inject.service(),

    admissionruleModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('admissionrule').then(function(records){
        self.set ('selectedAdmissionrule', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('admissionrule');
    }),

  actions: {
    saveP(){
      var myStore = this.get('store');
      var chosenAdmissionrule = myStore.peekRecord('admissionrule', this.get ('selectedAdmissionrule'));
      var newProgram = myStore.createRecord('academicprogramcode', {
        name: this.get('name'),
        admissionrule: chosenAdmissionrule
      });
      newProgram.save().then(() => {
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