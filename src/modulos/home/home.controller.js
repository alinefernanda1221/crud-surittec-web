import { inherit } from "@uirouter/core";

export default class HomeController {

  constructor($state, $timeout, $scope, $rootScope) {
    var vm = this;
    vm.isAdmin = false;
    vm.mensagemPermissao = "Você deve ser administrador ou estar logado para executar essa ação."

    init();

    function init() { }

    vm.isAdmin = function() {
      return $rootScope.isAdmin;
    }

    /**O FORMULÁRIO SÓ APARECE AS MENSAGENS DE ERRO SE RECARREGAR A PÁGINA */
    // vm.irParaCadastro = function () {
    //   $timeout(function () {
    //     $state.go('cliente-cadastro');
    //     $timeout(function () {
    //       window.location.reload();
    //     }, 3000);
    //   });
    // }
    
    vm.irParaCadastro = function () {
      $state.go('cliente-cadastro');
    }
    
  }
}
HomeController.$inject = ['$state', '$timeout', '$scope', '$rootScope'];