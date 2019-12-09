import angular from 'angular';

class EmailService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_EMAIL = REST_API + "/email";
    }

    removerPorId(id) {
        return this.$http.delete(this.ENDPOINT_EMAIL + '/' + id);
    }
}

export default angular.module('services.email-service', [])
    .service('EmailService', EmailService)
    .name;
