import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.query('cancelar-request', {
      orderBy: 'status',
      equalTo: "En espera"
    })
  }
});
