import Ember from 'ember';

export default Ember.Component.extend({
    isHighschoolsubjectFormEditing: false,
    store: Ember.inject.service(),

    actions: {
      saveHighschoolsubject () {
        var myStore = this.get('store');
        var newHighschoolsubject = myStore.createRecord('highschoolsubject', {
          name: this.get('name'),
          description: this.get('description')
        });

        newHighschoolsubject.save().then(() => {
          this.set('isHighschoolsubjectFormEditing', false);
        });
      },

      selectStudent (student){
        this.set('selectedStudent', student);
        Ember.Logger.log(this.get('selectedStudent'));
      },

      addHighschoolsubject () {
        this.set('isHighschoolsubjectFormEditing', true);
      },

      cancelHighschoolsubject () {
        this.set('isHighschoolsubjectFormEditing', false);
      }

    }
});
