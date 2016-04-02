import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
  	isViewingDistributionResult: false,
  	programplacements: null,

  actions: {
    	viewDistributionResult: function(ID){
			var self = this;
			var myStore = this.get('store');
			myStore.findAll('distributionresult');

			myStore.query('programplacement', {distributionresult: ID}).then(function(programplacements) {
				self.set('programplacements', programplacements);
			});
			this.set('isViewingDistributionResult', true);
		},

	cancel () {
		this.set('isViewingDistributionResult', false);
	}
}
});



// import Ember from 'ember';

// export default Ember.Component.extend({
// 	store: Ember.inject.service(),
//   	isViewingDistributionResult: false,
//   	distributionResult: "jejeje",

// 	distributionresultModel: Ember.computed(function(){
// 	  return this.get('store').findAll('distributionresult');
// 	}),

//   actions: {
//     	viewDistributionResult: function(ID){
// 			var self = this;
// 			var myStore = this.get('store');
// 			myStore.findAll('distributionresult');

// 			myStore.find('distributionresult', ID).then(function(distributionresult) {
// 				var result = distributionresult.get('result');
// 				//var formattedResult = result.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "<br>");
// 				var formattedResult = result.replace(/(?:\r\n|\r|\n)/g, "<hr>");
// 				self.set('distributionResult', formattedResult);
// 			});
// 			this.set('isViewingDistributionResult', true);
// 		},

// 	cancel () {
// 		this.set('isViewingDistributionResult', false);
// 	}
// }
// });
