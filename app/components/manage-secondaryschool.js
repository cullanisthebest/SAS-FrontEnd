import Ember from 'ember';

export default Ember.Component.extend({
    isSecondaryschoolFormEditing: false,
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
      saveSecondaryschool () {
        var myStore = this.get('store');
        var chosenStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
        var newSecondaryschool = myStore.createRecord('secondaryschool', {
          name: this.get('name'),
          student: chosenStudent
        });

        newSecondaryschool.save().then(() => {
          this.set('isSecondaryschoolFormEditing', false);
        });
      },

      selectStudent (student){
        this.set('selectedStudent', student);
        Ember.Logger.log(this.get('selectedStudent'));
      },

      addSecondaryschool () {
        this.set('isSecondaryschoolFormEditing', true);
      },

      cancelSecondaryschool () {
        this.set('isSecondaryschoolFormEditing', false);
      }

    }
});
