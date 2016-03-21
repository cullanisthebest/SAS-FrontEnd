import Ember from 'ember';

export default Ember.Component.extend({
  isStudentFormEditing: false,
  store: Ember.inject.service(),
  selectedResidency: null,
  residencyID: null,
  selectedGender: null,
  genderID: null,
  selectedProvince: null,
  provinceID: null,
  selectedCountry: null,
  countryID: null,
  selectedCity: null,
  cityID: null,
  selectedAcademicload: null,
  academicloadID: null,
  studentModel: null,
  ID: null,
  studentRecord: null,
  Model: null,

  generateModel: Ember.observer('isStudentFormEditing', function(){
    var self = this;
    var myStore = this.get('store');

    var student = myStore.peekRecord('student', this.get('ID'));

    self.set ('studentModel', student);
    self.set ('selectedResidency', student.get('resInfo') );
    self.set ('selectedGender',student.get('gender') );
    self.set ('selectedCountry',student.get('country') );
    self.set ('selectedProvince',student.get('province') );
    self.set ('selectedCity',student.get('city') );
    self.set ('selectedAcademicload',student.get('academicload') );
  }),

  residencyModel: Ember.computed(function(){
    var self = this;
    this.get('store').findAll('residency').then(function(records){
      self.set ('selectedResidency', records.get('firstObject').get('id'));
    });
    return this.get('store').findAll('residency');
  }),

  genderModel: Ember.computed(function(){
    var self = this;
    this.get('store').findAll('gender').then(function(records){
      self.set ('selectedGender', records.get('firstObject').get('id'));
    });
    return this.get('store').findAll('gender');
  }),

  countryModel: Ember.computed(function(){
    var self = this;
    this.get('store').findAll('country').then(function(records){
      self.set ('selectedCountry', records.get('firstObject').get('id'));
    });
    return this.get('store').findAll('country');
  }),

  provinceModel: Ember.computed(function(){
    var self = this;
    this.get('store').findAll('province').then(function(records){
      self.set ('selectedProvince', records.get('firstObject').get('id'));
    });
    return this.get('store').findAll('province');
  }),

  cityModel: Ember.computed(function(){
    var self = this;
    this.get('store').findAll('city').then(function(records){
      self.set ('selectedCity', records.get('firstObject').get('id'));
    });
    return this.get('store').findAll('city');
  }),

  academicloadModel: Ember.computed(function(){
    var self = this;
    this.get('store').findAll('academicload').then(function(records){
      self.set ('selectedAcademicload', records.get('firstObject').get('id'));
    });
    return this.get('store').findAll('academicload');
  }),

  actions: {
    saveStudent () {

      var myStore = this.get('store');
      var updatedStudent = myStore.peekRecord('student', this.get('ID'));
      var chosenResidency = myStore.peekRecord('residency', this.get ('selectedResidency'));
      var chosenGender = myStore.peekRecord('gender', this.get ('selectedGender'));
      var chosenCountry = myStore.peekRecord('country', this.get ('selectedCountry'));
      var chosenProvince = myStore.peekRecord('province', this.get ('selectedProvince'));
      var chosenCity = myStore.peekRecord('city', this.get ('selectedCity'));
      var chosenAcademicload = myStore.peekRecord('academicload', this.get ('selectedAcademicload'));

      updatedStudent.set('resInfo',chosenResidency);
      updatedStudent.set('gender',chosenGender);
      updatedStudent.set('country',chosenCountry);
      updatedStudent.set('province',chosenProvince);
      updatedStudent.set('city',chosenCity);
      updatedStudent.set('academicload',chosenAcademicload);
      updatedStudent.save().then(() => {
        this.set('isStudentFormEditing', false);
      });
    },

    editStudent () {
      this.set('isStudentFormEditing', true);
    },

    cancel () {
      this.set('isStudentFormEditing', false);
    }

  }
});
