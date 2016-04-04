import DS from 'ember-data';

export default DS.Model.extend({
    date: DS.attr(),
    comment: DS.attr(),
  	student: DS.belongsTo('student', {async: true}),
  	basisCode: DS.belongsTo('basisofadmissioncode', {async: true})
});
