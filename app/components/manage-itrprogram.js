import Ember from 'ember';

export default Ember.Component.extend({
  isManagingItrprogram: false,
  store: Ember.inject.service(),
  selectedStudent: null,
  selectedAcademicprogramcode:null,
  selectedAcademicprogramcode1:null,
  selectedAcademicprogramcode2:null,
  selectedAcademicprogramcode3:null,
  selectedAcademicprogramcode4:null,
  selectedAcademicprogramcode5:null,
  selectedAcademicprogramcode6:null,
  selectedAcademicprogramcode7:null,
  selectedAcademicprogramcode8:null,
  selectedAcademicprogramcode9:null,
  dropdown2:null,
  dropdown3:null,
  dropdown4:null,
  dropdown5:null,
  dropdown6:null,
  dropdown7:null,
  dropdown8:null,
  dropdown9:null,
  dropdown10:null,

  studentModel: Ember.computed(function(){
      var self = this;
      this.get('store').findAll('student').then(function(records){
        self.set ('selectedStudent', records.get('firstObject').get('id'));
      });
      return this.get('store').findAll('student');
    }),

  academicprogramcodeModel: Ember.computed(function(){
      var self = this;
      return this.get('store').findAll('academicprogramcode');
    }),


  actions: {
    remove1(choice){
      var self = this;
      this.set('selectedAcademicprogramcode', choice);
      var all=this.get('academicprogramcodeModel');
      var remaining=[];
      for(var i=0;i<10;i++)
      {
        if(choice==all.objectAt(i).get('id'))
        {

        }
        else
        {
          remaining.addObject(all.objectAt(i));
        }
      }
      this.set('dropdown2',remaining.toArray());
    },

    remove2(choice){
      var self = this;
      this.set('selectedAcademicprogramcode1', choice);
      var remaining=[];

      for(var i=0;i<9;i++)
      {
        if(choice==this.get('dropdown2').objectAt(i).get('id'))
        {

        }
        else
        {
          remaining.addObject(this.get('dropdown2').objectAt(i));
        }
      }
      this.set('dropdown3', remaining.toArray());
    },

    remove3(choice){
      var self = this;
      this.set('selectedAcademicprogramcode2', choice);
      var remaining=[];

      for(var i=0;i<8;i++)
      {
        if(choice==this.get('dropdown3').objectAt(i).get('id'))
        {

        }
        else
        {
          remaining.addObject(this.get('dropdown3').objectAt(i));
        }
      }
      this.set('dropdown4', remaining.toArray());
    },

    remove4(choice){
      var self = this;
      this.set('selectedAcademicprogramcode3', choice);
      var remaining=[];

      for(var i=0;i<7;i++)
      {
        if(choice==this.get('dropdown4').objectAt(i).get('id'))
        {

        }
        else
        {
          remaining.addObject(this.get('dropdown4').objectAt(i));
        }
      }
      this.set('dropdown5', remaining.toArray());
    },

    remove5(choice){
      var self = this;
      this.set('selectedAcademicprogramcode4', choice);
      var remaining=[];

      for(var i=0;i<6;i++)
      {
        if(choice==this.get('dropdown5').objectAt(i).get('id'))
        {

        }
        else
        {
          remaining.addObject(this.get('dropdown5').objectAt(i));
        }
      }
      this.set('dropdown6', remaining.toArray());
    },

    remove6(choice){
      var self = this;
      this.set('selectedAcademicprogramcode5', choice);
      var remaining=[];

      for(var i=0;i<5;i++)
      {
        if(choice==this.get('dropdown6').objectAt(i).get('id'))
        {

        }
        else
        {
          remaining.addObject(this.get('dropdown6').objectAt(i));
        }
      }
      this.set('dropdown7', remaining.toArray());
    },

    remove7(choice){
      var self = this;
      this.set('selectedAcademicprogramcode6', choice);
      var remaining=[];

      for(var i=0;i<4;i++)
      {
        if(choice==this.get('dropdown7').objectAt(i).get('id'))
        {

        }
        else
        {
          remaining.addObject(this.get('dropdown7').objectAt(i));
        }
      }
      this.set('dropdown8', remaining.toArray());
    },

    remove8(choice){
      var self = this;
      this.set('selectedAcademicprogramcode7', choice);
      var remaining=[];

      for(var i=0;i<3;i++)
      {
        if(choice==this.get('dropdown8').objectAt(i).get('id'))
        {

        }
        else
        {
          remaining.addObject(this.get('dropdown8').objectAt(i));
        }
      }
      this.set('dropdown9', remaining.toArray());
    },

    remove9(choice){
      var self = this;
      this.set('selectedAcademicprogramcode8', choice);
      var remaining=[];

      for(var i=0;i<2;i++)
      {
        if(choice==this.get('dropdown9').objectAt(i).get('id'))
        {

        }
        else
        {
          remaining.addObject(this.get('dropdown9').objectAt(i));
        }
      }
      this.set('dropdown10', remaining.toArray());
    },

    setLast(choice){
      var self = this;
      this.set('selectedAcademicprogramcode9', choice);
    },

    saveItrprogram (){
      var myStore = this.get('store');
      var selectedStudent = myStore.peekRecord('student', this.get ('selectedStudent'));
      var selectedAcademicprogramcode= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode'));
      var selectedAcademicprogramcode1= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode1'));
      var selectedAcademicprogramcode2= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode2'));
      var selectedAcademicprogramcode3= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode3'));
      var selectedAcademicprogramcode4= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode4'));
      var selectedAcademicprogramcode5= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode5'));
      var selectedAcademicprogramcode6= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode6'));
      var selectedAcademicprogramcode7= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode7'));
      var selectedAcademicprogramcode8= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode8'));
      var selectedAcademicprogramcode9= myStore.peekRecord('academicprogramcode',this.get('selectedAcademicprogramcode9'));

      var newItrprogram = myStore.createRecord('itrprogram', {
        order: 1,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode
      });
      newItrprogram.save();

      var newItrprogram1 = myStore.createRecord('itrprogram', {
        order: 2,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode1
      });
      newItrprogram1.save();

      var newItrprogram2 = myStore.createRecord('itrprogram', {
        order: 3,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode2
      });
      newItrprogram2.save();

      var newItrprogram3 = myStore.createRecord('itrprogram', {
        order: 4,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode3
      });
      newItrprogram3.save();

      var newItrprogram4 = myStore.createRecord('itrprogram', {
        order: 5,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode4
      });
      newItrprogram4.save();

      var newItrprogram5 = myStore.createRecord('itrprogram', {
        order: 6,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode5
      });
      newItrprogram5.save();

      var newItrprogram6 = myStore.createRecord('itrprogram', {
        order: 7,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode6
      });
      newItrprogram6.save();

      var newItrprogram7 = myStore.createRecord('itrprogram', {
        order: 8,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode7
      });
      newItrprogram7.save();

      var newItrprogram8 = myStore.createRecord('itrprogram', {
        order: 9,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode8
      });
      newItrprogram8.save();

      var newItrprogram9 = myStore.createRecord('itrprogram', {
        order: 10,
        student: selectedStudent,
        academicprogramcode: selectedAcademicprogramcode9
      });
      newItrprogram9.save().then(() => {
        this.set('isManagingItrprogram', false);
      });
    },
    cancel() {
      this.set('isManagingItrprogram', false);
    },

    selectedStudent (student){
        this.set('selectedStudent', student);
        Ember.Logger.log(this.get('selectedStudent'));
      },

    addNewItrprogram() {
      this.set('isManagingItrprogram', true);
    },
    doneItrprogram(){
      this.set('isManagingItrprogram', false);
    }

  }
});