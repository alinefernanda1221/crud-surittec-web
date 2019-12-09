import angular from 'angular';

class EnderecoService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_ENDERECO = REST_API + "/endereco";
    }

    buscarEnderecoCEP(cep) {
        return this.$http.get(this.ENDPOINT_ENDERECO + '/consultaCEP/' + cep);
    }
}

export default angular.module('services.endereco-service', [])
    .service('EnderecoService', EnderecoService)
    .name;
