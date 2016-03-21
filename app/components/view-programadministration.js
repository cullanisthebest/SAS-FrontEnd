import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isViewingProgramadministration: false,
  ID: null,

  programadministrationModel: Ember.computed(function(){
    return this.get('store').findAll('programadministration');

  }),

  actions: {
    viewProgramadministration() {
      
    var self = this;
    var myStore = this.get('store');

    myStore.query('programadministration', {department: this.get('ID')}).then(function (programadministrations) {
      self.set('programadministrations',programadministrations) // first one will be used in each statement
    });

    
      this.set('isViewingProgramadministration', true);
    },

    doneViewingPrograms() {
      this.set('isViewingProgramadministration', false);
    }

  }
});
