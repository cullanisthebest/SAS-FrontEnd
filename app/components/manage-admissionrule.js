import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingAdmissionrule: false,

  admissionruleModel: Ember.computed(function(){
    return this.get('store').findAll('admissionrule');
  }),

  actions: {
    saveAdmissionRule (){
      var myStore = this.get('store');
      var newAdmissionRule = myStore.createRecord('admissionrule', {
        description: this.get('description')
      });
      newAdmissionRule.save().then(() => {
        this.set('isManagingAdmissionrule', false);
      });
    },

    cancelAdmissionRule() {
      this.set('isManagingAdmissionrule', false);
    },

    manageAdmissionRule() {
      this.set('isManagingAdmissionrule', true);
    },

    addAdmissionRule() {
      this.set('isManagingAdmissionrule', true);
    },
    doneAdmissionRule(){
      this.set('isManagingAdmissionrule', false);
    }
  }
});