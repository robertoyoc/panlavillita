import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('string'),
  nombre: DS.attr('string'),
  apellido: DS.attr('string'),
  perfil: DS.attr('string'),
  telefono: DS.attr('string'),
  sucursal: DS.belongsTo('sucursal'),
  qrCode: DS.attr('string')
});
