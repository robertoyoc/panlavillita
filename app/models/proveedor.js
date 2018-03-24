import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	productos: DS.hasMany('producto') 
});
