import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	description: DS.attr(),
    highschoolcoursesmarks: DS.hasMany('highschoolcoursesmark', { async: true })
});
