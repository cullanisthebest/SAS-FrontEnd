import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isViewingAdmissionrules: true,

  admissionruleModel: Ember.computed(function(){
    return this.get('store').findAll('admissionrule');
  }),

  actions: {
    viewAdmissionrules() {
      this.set('isViewingAdmissionrules', true);
    },

    doneViewingAdmissionrules() {
      this.set('isViewingAdmissionrules', false);
    }
  }
});
