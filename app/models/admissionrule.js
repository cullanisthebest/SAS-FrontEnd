import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr(),
  academicprogramcode: DS.hasMany('academicprogramcode', {async: true}),
  logicalexpression: DS.hasMany('logicalexpression', {async: true})
});