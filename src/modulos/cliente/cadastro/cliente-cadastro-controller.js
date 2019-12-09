import { inherit } from "@uirouter/core";
import { $IsStateFilter } from "angular-ui-router/lib/stateFilters";

export default class ClienteCadastroController {

  constructor(ClienteService, EnderecoService, TelefoneService, $rootScope, $state) {
    let vm = this;
    vm.voltar = voltar;
    vm.limpar = limpar;
    vm.formIsValid = true;
    vm.cliente = {};
    vm.cliente.telefones = [];
    vm.cliente.emails = [];
    vm.cliente.endereco = {};
    vm.telefone = {};

    vm.mensagemCaracteres = "Preencha no mínimo 3 e no máximo 100 caracteres";
    vm.mensagemCampoObrigatorio = "Campo obrigatório";
    vm.regex = /^[^`~!@#$%\^&*()_+={}|[\]\\:';"<>?,./1-9]*$/;
    vm.mascara = "(99) 9999-9999";
    
    init();

    function init() {
      TelefoneService.buscarTodosTipoTelefone()
      .then((response) => {
        vm.opcoesTipo = response.data;
      }).catch((error) => {
        alert("Houve um erro ao buscar os tipos telefone: " + error.message);
      });
      
    }
    
    vm.getMascara = function() {
      if(isCelular()) {
        vm.mascara = '(99)99999-9999';
      }else {
        vm.mascara = '(99)9999-9999';
      }
    }

    function isCelular() {
      return vm.telefone.tipo.nomeTipo === 'CELULAR' ? true : false;
    }

    vm.consultarEnderecoCliente = function() {
      if(!!vm.cliente.endereco){
        vm.cepConsultado = angular.copy(vm.cliente.endereco.cep);
        EnderecoService.buscarEnderecoCEP(vm.cliente.endereco.cep)
          .then((response) => {
            vm.cliente.endereco = response.data;
          }).catch((error) => {
            alert(error.data.message);
          });
      }
    }

    function existeTelefoneEmail() {
      return vm.cliente.telefones.length >= 1 && vm.cliente.emails.length >= 1;
    }

    vm.cadastrarCliente = function(){
      if(vm.formCadastroCliente.$valid && existeTelefoneEmail()){
        vm.formIsValid = true;

        vm.cliente.endereco.cep = vm.cepConsultado;
        
        ClienteService.cadastrarCliente(vm.cliente)
        .then((response) => {
          vm.limpar();
          alert("Cliente cadastrado com sucesso!");
        }).catch((error) => {
          alert("Ocorreu um erro! " + error.data);
        });

      }else{
        vm.formIsValid = false
        if (!existeTelefoneEmail()) {
          alert("Deve ser informado pelo menos 1 telefone e 1 email.");
          return;
        }
      }
    }

    vm.adicionarTelefone = function(telefone){
      vm.cliente.telefones.push(angular.copy(telefone));
      vm.telefone = {};
      vm.desabilitar();
    }
    
    vm.adicionarEmail = function(enderecoEmail){
      if(!!enderecoEmail){
        vm.cliente.emails.push(angular.copy({ email: angular.copy(enderecoEmail) }));
        vm.enderecoEmail = undefined;
      }
    }

    vm.removerTelefone = function(index){
      vm.cliente.telefones.splice(index, 1)
    }
    
    vm.removerEmail = function(index){
      vm.cliente.emails.splice(index, 1)
    }

    vm.habilitar = function(){
      vm.habilitarBotao = true;
    }

    vm.desabilitar = function(){
      vm.habilitarBotao = false;
    }

    /**
     * Limpar o formulário e reseta os dados preenchidos do cliente.
     */
    function limpar(){
      vm.formCadastroCliente.$setUntouched();
      document.getElementById("form-cadastro-cliente").reset();
      vm.cliente = {};
      vm.cliente.telefones = [];
      vm.cliente.emails = [];
    }

    /**
     * Retorna o nome do tipo do telefone.
     */
    vm.retornaNomeTipo = function(telefone){
      let stringRetornada = "";
      let opcoesTipoArray = angular.copy(vm.opcoesTipo);     
      for(const opcao of opcoesTipoArray) {
        if(opcao.id == telefone.tipoTelefone.id){
          return opcao.nomeTipo;
        }
      }
      return stringRetornada;
    }

    function voltar() {
      $state.go('home');
    };
  }
}
ClienteCadastroController.$inject = ['ClienteService', 'EnderecoService', 'TelefoneService', '$rootScope', '$state'];
