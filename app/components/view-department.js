import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isViewingDepartments: false,
  ID: null,

  departmentModel: Ember.computed(function(){
    return this.get('store').findAll('department');
  }),

  actions: {
    viewDepartments() {
    
    var self = this;
    var myStore = this.get('store');

    var selectedFaculty = myStore.findRecord('faculty', this.get('ID')).then(function (faculty){
      self.set('facultyName', faculty.get('name'))
    })

    myStore.query('department', {faculty: this.get('ID')}).then(function (departments) {
      self.set('departments',departments) // first one will be used in each statement
    });

    this.set('isViewingDepartments', true);
    },

    doneViewingDepartments() {
      this.set('isViewingDepartments', false);
    }

  }
});
