import Ember from 'ember';

export default Ember.Component.extend({
    isScholarAndAwardCodeFormEditing: false,
    store: Ember.inject.service(),
    selectedStudent: null,

    studentModel: Ember.computed(function(){
      var self = this;
        this.get('store').findAll('student').then(function(records){
        self.set ('selectedStudent', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('student');
    }),

    actions: {
      saveScholarAndAwardCode () {
        var myStore = this.get('store');
        var chosenStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
        var newScholarAndAwardCode = myStore.createRecord('scholarandawardcode', {
          name: this.get('name'),
          student: chosenStudent
        });

        newScholarAndAwardCode.save().then(() => {
          this.set('isScholarAndAwardCodeFormEditing', false);
        });
      },

      selectStudent (student){
        this.set('selectedStudent', student);
        Ember.Logger.log(this.get('selectedStudent'));
      },

      addScholarAndAwardCode () {
        this.set('isScholarAndAwardCodeFormEditing', true);
      },

      cancelScholarAndAwardCode () {
        this.set('isScholarAndAwardCodeFormEditing', false);
      }

    }
});
