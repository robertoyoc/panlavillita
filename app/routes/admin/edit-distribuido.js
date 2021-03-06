import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";
import FindQuery from 'ember-emberfire-find-query/mixins/find-query';

export default Route.extend(FindQuery, {
	currentUser: service(),
    model(params) {
        this.set('idProducto', params.id)
        return this.store.peekRecord('distribuido', params.id)
    },
    afterModel(model){
		return this.get('currentUser.account').then((account)=>{
			let sucursal = account.get('administradorDe')

			let context = this;
			return new Promise(function (resolve, reject){
				context.filterEqual(context.store, 'existence', { 'tipo': 'distribuido', 'distribuido.id': context.get('idProducto'),'sucursal.id': sucursal.get('id')}, function(distribuido){
					//console.log(mprima[0])
					context.set('existencia', distribuido[0])
					return resolve()
				})
			})
		})
	},
	setupController(controller){
		this._super(...arguments)
		controller.set('existencia', this.get('existencia'))
	}
});
