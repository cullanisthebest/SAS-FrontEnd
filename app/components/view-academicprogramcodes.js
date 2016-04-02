import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isViewingAcademicprogramcodes: true,

  academicprogramcodeModel: Ember.computed(function(){
    return this.get('store').findAll('academicprogramcode');
  }),

  actions: {
    viewAdmissionrules() {
      this.set('isViewingAcademicprogramcodes', true);
    },

    doneViewingAdmissionrules() {
      this.set('isViewingAcademicprogramcodes', false);
    }
  }
});
