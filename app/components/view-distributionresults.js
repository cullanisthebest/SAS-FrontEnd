import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isViewingDistributionResults: true,
  isNotViewingDistributionResult: true,
  distributionResult: "jejeje",

  distributionresultModel: Ember.computed(function(){
    return this.get('store').findAll('distributionresult');
  }),

  actions: {

    viewDistributionResults() {
      this.set('isViewingDistributionResults', true);
    },

    doneViewingDistributionResults() {
      this.set('isViewingDistributionResults', false);
    }
  }
});
