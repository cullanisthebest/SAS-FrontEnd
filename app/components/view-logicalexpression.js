import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isViewingLogicalexpressions: false,
  ID: null,

  logicalexpressionModel: Ember.computed(function(){
    return this.get('store').findAll('logicalexpression');
  }),

  actions: {
    viewLogicalexpressions() {
      
    var self = this;
    var myStore = this.get('store');

    console.log("Made it to before query in view-le.js");

    myStore.query('logicalexpression', {admissionrule: this.get('ID')}).then(function (logicalexpressions) {
      self.set('logicalexpressions',logicalexpressions) // first one will be used in each statement
    });

    console.log("After query in view-le.js");

    this.set('isViewingLogicalexpressions', true);
    },

    doneViewingLogicalexpressions() {
      this.set('isViewingLogicalexpressions', false);
    }

  }
});
