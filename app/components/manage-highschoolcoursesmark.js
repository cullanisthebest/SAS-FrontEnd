import Ember from 'ember';

export default Ember.Component.extend({
    isHighschoolcoursesmarkFormEditing: false,
    isSelectingStudent: false,
    store: Ember.inject.service(),
    selectedStudent: null,
    selectedSchool: null,
    selectedSubject: null,
    schools: null,

    studentModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('student').then(function(records){
        self.set ('selectedStudent', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('student');
    }),

    highSchoolSubjectModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('highschoolsubject').then(function(records){
        self.set ('selectedSubject', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('highschoolsubject');
    }),

    actions: {
      saveHighschoolcoursesmark () {
        var myStore = this.get('store');
        var chosenSchool = myStore.peekRecord('secondaryschool', this.get ('selectedSchool'));
        var chosenSubject = myStore.peekRecord('highschoolsubject', this.get ('selectedSubject'));
        var newHighschoolcoursesmark = myStore.createRecord('highschoolcoursesmark', {
          level: this.get('level'),
          source: this.get('source'),
          unit: this.get('unit'),
          grade: this.get('grade'),
          secondaryschool: chosenSchool,
          highschoolsubject: chosenSubject
        });

        newHighschoolcoursesmark.save().then(() => {
          this.set('isHighschoolcoursesmarkFormEditing', false);
        });
      },

      selectStudent (){
          var self = this;
          var myStore = this.get('store');

          self.get('store').query('secondaryschool', {student: self.get('selectedStudent')}).then(function(schoolRecords){
              self.set('selectedSchool', schoolRecords.get('firstObject').get('id'));
              self.set('schools', schoolRecords);
          });
          
          this.set('isSelectingStudent', false);
          this.set('isHighschoolcoursesmarkFormEditing', true);
      },

      selectSchool (secondarySchool){
        this.set('selectedSchool', secondarySchool);
        Ember.Logger.log(this.get('selectedSchool'));
      },

      selectSubject (subject){
        this.set('selectedSubject', subject);
        Ember.Logger.log(this.get('selectedSubject'));
      },

      addHighschoolcoursesmark () {
        this.set('isSelectingStudent', true);
      },

      cancelHighschoolcoursesmark () {
        this.set('isSelectingStudent', false);
        this.set('isHighschoolcoursesmarkFormEditing', false);
      }

    }
});
