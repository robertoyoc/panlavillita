import DS from 'ember-data';

export default DS.Model.extend({
	properties: DS.hasMany('property')

});
