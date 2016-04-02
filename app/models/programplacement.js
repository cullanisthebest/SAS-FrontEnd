import DS from 'ember-data';

export default DS.Model.extend({
  academicprogramcode: DS.belongsTo('academicprogramcode',{ async: true }),
  distributionresult: DS.belongsTo('distributionresult',{ async: true }),
  commentcode: DS.hasMany('commentcode',{ async: true }),
  student: DS.belongsTo('student',{ async: true }),
  choice: DS.attr(),
  override: DS.attr()
});