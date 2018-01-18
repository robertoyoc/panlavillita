import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  precio: DS.attr('number'),
  categoria: DS.attr('string'),
  unidad: DS.attr('string'),
  cantidad: DS.attr('number')
});
