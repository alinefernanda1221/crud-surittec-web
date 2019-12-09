import { inherit } from "@uirouter/core";

export default class ClientePesquisaController {

  constructor($state, ClienteService, $rootScope) {
    var vm = this;
    vm.voltar = voltar;
    vm.formIsValid = true;
    vm.clientesPesquisados = [];
    vm.mensagemPermissao = "Você deve ser administrador ou estar logado para executar essa ação."

    init();

    function init() { }

    vm.pesquisarCliente = function() {
      let promissePesquisa = undefined;
      if(!!vm.codigoPesquisaCliente){
        ClienteService.consultaBasicaPorId(vm.codigoPesquisaCliente)
        .then((response) => {
          vm.clientesPesquisados = [];
          if(!!response.data) {
            vm.clientesPesquisados.push(response.data);
          }else{
            alert("Cliente não encontrado!")
          }

        }).catch((error) => {
          alert("Houve um erro ao pesquisar clientes:" +  error.message);
        });
        
      }else{
        
        ClienteService.buscarTodosClientes()
        .then((response) => {
          vm.clientesPesquisados = response.data;
        }).catch((error) => {
          alert("Houve um erro ao pesquisar clientes:" +  error.message);
        });
      }
    }

    vm.editarCliente = function(clienteEditar) {
      $state.go('cliente-edicao', {
    		cliente : clienteEditar 
    	 });

    }

    vm.isAdmin = function() {
      return $rootScope.isAdmin;
    }

    function voltar() {
      window.history.back();
    };
  }
}//Fim classe
ClientePesquisaController.$inject = ['$state', 'ClienteService', '$rootScope'];