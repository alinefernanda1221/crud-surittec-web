import angular from 'angular';

class LoginService {

    constructor($http) {
        this.$http = $http;
        const REST_API = "http://localhost:8080";
        this.ENDPOINT_USUARIO = REST_API + "/usuario";
    }

    efetuarLogin(usuario) {
        let config = {
            params: usuario
        }
        return this.$http.get(this.ENDPOINT_USUARIO + '/login', config);
    }
}

export default angular.module('services.login-service', [])
    .service('LoginService', LoginService)
    .name;
