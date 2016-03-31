import Ember from 'ember';

export default Ember.Component.extend({
  file: null,
  inputType: 'Students',
  inputTypes: ["Students", "Program Record and Grades", "Admission Rules", 
  	"Residencies", "Countries", "Provinces", "Cities", "Term Codes", "Degree Codes", 
  	"Course Codes", "Comment Codes", "Faculties", "Departments", "Program Administration",
  	"Admission Rules"],
  actions: {
    fileSelectionChanged: function(file) {
      this.set('file', file)
    },
    selectInputType(inputType) {
      this.set('inputType', inputType);
    }
  },
});
