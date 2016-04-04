import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingStudents: true,
  isManagingGrades: false,
  isManagingDistributionresults: false,
  isManagingItrprograms: false,
  isManagingProgramadministration: false,
  isManagingAdmissionrules: false,
    // ADDED MM
  isManagingSecondaryschool: false,
  // END ADDED MM
  model: null,
  
    model: Ember.computed(function(){
      var self = this;
      return this.get('store').findAll('student');
    }),

  actions: {
    manageStudents() {
      this.set('isManagingStudents', true);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
            // ADDED MM
      this.set('isManagingSecondaryschool', false);
      // END ADDED MM
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
    },
    manageGrades() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', true);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
            // ADDED MM
      this.set('isManagingSecondaryschool', false);
      // END ADDED MM
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
    },
        // ADDED MM
    manageSecondaryschool() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingSecondaryschool', true);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
    },
    // END ADDED MM
    manageDistributionresults() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', true);
      this.set('isManagingItrprograms', false);
            // ADDED MM
      this.set('isManagingSecondaryschool', false);
      // END ADDED MM
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
    },
    manageItrprograms() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', true);
            // ADDED MM
      this.set('isManagingSecondaryschool', false);
      // END ADDED MM
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', false);
    },
    manageProgramadministration() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
            // ADDED MM
      this.set('isManagingSecondaryschool', false);
      // END ADDED MM
      this.set('isManagingProgramadministration', true);
      this.set('isManagingAdmissionrules', false);
    },
    manageAdmissionrules() {
      this.set('isManagingStudents', false);
      this.set('isManagingGrades', false);
      this.set('isManagingDistributionresults', false);
      this.set('isManagingItrprograms', false);
            // ADDED MM
      this.set('isManagingSecondaryschool', false);
      // END ADDED MM
      this.set('isManagingProgramadministration', false);
      this.set('isManagingAdmissionrules', true);
    }
  }
});
