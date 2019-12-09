import { inherit } from "@uirouter/core";
import loginService from "../../servicos/login-service";

export default class LoginController {

  constructor(LoginService, $state, $scope, $rootScope) {
    var vm = this;
    vm.usuario = {};

    init();

    function init() {}

    vm.efetuarLogin = function(usuario){
      LoginService.efetuarLogin(vm.usuario)
      .then((response) => {
        alert("Logado com sucesso!");
        $rootScope.usuario = angular.copy(response);
        verificaUsuario($rootScope);
        $state.go('home', {
          usuario: response
        });
      }).catch((error) => {
        alert(error.data.message);
        return;
      })
    }

    function verificaUsuario() {
      if(!!$rootScope.usuario){
        let usuario = $rootScope.usuario.data;
        if(usuario.permissao === 'ESCRITA'){
          $rootScope.isAdmin = true
        }else {
          $rootScope.isAdmin = false
        }
      }
    }
  }
}
LoginController.$inject = ['LoginService', '$state', '$scope', '$rootScope'];
