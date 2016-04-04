import DS from 'ember-data';

export default DS.Model.extend({
	level: DS.attr(),
	source: DS.attr(),
	unit: DS.attr(),
	grade: DS.attr(),
	secondaryschool: DS.belongsTo('secondaryschool', { async: true }),
	highschoolsubject: DS.belongsTo('highschoolsubject', { async: true })
});
