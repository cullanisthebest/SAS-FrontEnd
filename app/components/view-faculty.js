import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isViewingFaculties: true,

  facultyModel: Ember.computed(function(){
    return this.get('store').findAll('faculty');
  }),

  actions: {
    viewFaculties() {
      this.set('isViewingFaculties', true);
    },

    doneViewingFaculties() {
      this.set('isViewingFaculties', false);
    }
  }
});
