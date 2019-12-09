import angular from 'angular';

class ClienteService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_CLIENTE = REST_API + "/cliente";
    }

    cadastrarCliente(cliente) {
        return this.$http.post(this.ENDPOINT_CLIENTE + '/cadastrar' , cliente);
    }

    buscarTodosClientes() {
        return this.$http.get(this.ENDPOINT_CLIENTE + '/consultaTodos');
    }

    consultaBasicaPorId(id) {
        return this.$http.get(this.ENDPOINT_CLIENTE + '/consultaBasica/' + id);
    }
    
    consultaCompletaPorId(id) {
        return this.$http.get(this.ENDPOINT_CLIENTE + '/consultaCompleta/' + id);
    }

    atualizarCliente(cliente) {
        return this.$http.put(this.ENDPOINT_CLIENTE + '/atualizar', cliente);
    }    
}

export default angular.module('services.cliente-service', [])
    .service('ClienteService', ClienteService)
    .name;
