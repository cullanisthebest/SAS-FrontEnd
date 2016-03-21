import Ember from 'ember';

export default Ember.Component.extend({
  isStudentFormEditing: false,
  store: Ember.inject.service(),
  selectedResidency: null,
  studentRecord: null,
  selectedProvince: null,
  selectedCountry: null,
  selectedCity: null,
  studentModel: null,
  ID: null,
  Model: null,
  residencyID: null,
  genderID: null,
  countryID: null,
  provinceID: null,
  cityID: null,
  academicloadID: null,
  selectedDate: null,

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
      var updatedStudent = this.get('store').peekRecord('student', this.get('ID'));
      var res = this.get('store').peekRecord('residency', this.get('selectedResidency'));
      var gen = this.get('store').peekRecord('gender', this.get('selectedGender'));
      var countr = this.get('store').peekRecord('country', this.get('selectedCountry'));
      var prov = this.get('store').peekRecord('province', this.get('selectedProvince'));
      var cit = this.get('store').peekRecord('city', this.get('selectedCity'));
      var academic = this.get('store').peekRecord('academicload', this.get('selectedAcademicload'));

      updatedStudent.set('DOB',new Date(this.get('selectedDate')));
      updatedStudent.set('resInfo',res );
      updatedStudent.set('gender',gen );
      updatedStudent.set('country', countr);
      updatedStudent.set('province', prov);
      updatedStudent.set('city', cit);
      updatedStudent.set('academicload', academic);

      updatedStudent.save().then(() => {
        this.set('isStudentFormEditing', false);
      });
    },

    selectResidency (residency){
      this.set('selectedResidency', residency);
    },

    selectGender (gender){
      this.set('selectedGender', gender);
    },

    selectCountry (country){
      this.set('selectedCountry', country);
    },

    selectProvince (province){
      this.set('selectedProvince', province);
    },

    selectCity (city){
      this.set('selectedCity', city);
    },

    selectAcademicload (academicload){
      this.set('selectedAcademicload', academicload);
    },

    assignDate (date){
      this.set('selectedDate', date);
    },

    editStudent () {
      /*this.get('Model').forEach(function(record){
         record.reload();
      });*/
      this.set ('studentRecord', this.get('store').peekRecord('student', this.get('ID')));
      var self = this;

      this.get('studentRecord').get('gender').then(function(gen){
        if (gen) {
          self.set ('genderID' , gen.get('id'));
        }
      });

      this.get('studentRecord').get('resInfo').then(function(res){
        if (res) {
          self.set ('residencyID' , res.get('id'));
        }
      });

      this.get('studentRecord').get('country').then(function(countr){
        if (countr) {
          self.set ('countryID' , countr.get('id'));
        }
      });

      this.get('studentRecord').get('province').then(function(prov){
        if (prov) {
          self.set ('provinceID' , prov.get('id'));
        }
      });

      this.get('studentRecord').get('city').then(function(cit){
        if (cit) {
          self.set ('cityID' , cit.get('id'));
        }
      });

      this.get('studentRecord').get('academicload').then(function(academic){
        if (academic) {
          self.set ('academicloadID' , academic.get('id'));
        }
      });

      var date = this.get('studentRecord').get('DOB');
      var datestring = date.toISOString().substring(0, 10);
      this.set('selectedDate', datestring);

      this.set('isStudentFormEditing', true);
    },

    cancel () {
      this.set('isStudentFormEditing', false);
    }

  }
});
