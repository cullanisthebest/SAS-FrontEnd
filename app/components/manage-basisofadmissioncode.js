import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),
	isManagingBAcode: false,

	  	actions:{
  		saveBAcode (){
      		var myStore = this.get('store');		
      		var newBAcode = myStore.createRecord('basisofadmissioncode', {
	          name: this.get('name'),
	        });
Ember.Logger.log('name: ', this.get('name'));
	      	newBAcode.save().then(() => {
	        	this.set('isManagingBAcode', false);  
	      	});
    	},
		addBAcode(){
	  		this.set('isManagingBAcode', true);
		},

		cancelBAcode(){
			this.set('isManagingBAcode', false);
		}
	}
});