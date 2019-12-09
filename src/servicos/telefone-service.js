import angular from 'angular';

class TelefoneService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_TELEFONE = REST_API + "/telefone";
    }

    buscarTodosTipoTelefone() {
        return this.$http.get(this.ENDPOINT_TELEFONE + "/tiposTelefone");
    }

    removerPorId(id) {
        return this.$http.delete(this.ENDPOINT_TELEFONE + '/' + id);
    }
}

export default angular.module('services.telefone-service', [])
    .service('TelefoneService', TelefoneService)
    .name;
