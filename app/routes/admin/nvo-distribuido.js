import Route from '@ember/routing/route';
import {hash} from 'rsvp';
import {inject as service} from "@ember/service";

export default Route.extend({
    currentUser: service(),
    
    beforeModel() {
        /*
        this.store.createRecord('categoria', {
		 	nombre: "Lácteos",
         }).save()
         this.store.createRecord('categoria', {
		 	nombre: "Pan",
         }).save() 
         */
    },

    model(){
		  return this.store.createRecord('distribuido');
    },

    afterModel(model){
		  return this.get('currentUser.account').then((account)=>{
			  return this.set('existencia', this.store.createRecord('existence',{
				  productoId: model.get('id'),
				  tipo: model.get('constructor.modelName'),
				  sucursalId: account.get('sucursal.id'),
		  	}))
		  })
    },
    
    setupController(controller){
		this._super(...arguments)
		controller.set('existencia', this.get('existencia'))
	}
});
