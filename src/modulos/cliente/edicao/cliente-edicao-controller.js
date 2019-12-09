import { inherit } from "@uirouter/core";

export default class ClienteEdicaoController {

  constructor($stateParams, $state, ClienteService, TelefoneService, EmailService) {
    var vm = this;
    vm.voltar = voltar;
    let idCliente = $stateParams.cliente.id;
    vm.formIsValid = true;
    vm.cliente = {};
    vm.mensagemTelefone = "O cliente deve permanecer com ao menos 1 telefone."
    vm.mensagemEmail = "O cliente deve permanecer com ao menos 1 email."
    vm.mensagemCaracteres = "Preencha no mínimo 3 e no máximo 100 caracteres";
    vm.mensagemCampoObrigatorio = "Campo obrigatório";
    vm.mascara = "(99) 9999-9999";

    init();

    function init() {
      TelefoneService.buscarTodosTipoTelefone()
        .then((response) => {
          vm.opcoesTipo = response.data;
        
          ClienteService.consultaCompletaPorId(idCliente)
          .then((response) => {
            vm.cliente = response.data;
          }).catch((error) => {
            alert("Houve um erro ao consultar o cliente:" + error.message);
          });

        }).catch((error) => {
          alert("Houve um erro ao buscar os tipos de telefones:" + error.message);
        })
        
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
      let removido = vm.cliente.telefones[index];
      
      TelefoneService.removerPorId(removido.id)
      .then((response) => {
        vm.cliente.telefones.splice(index, 1)
        alert("Telefone removido com sucesso!")
      }).catch((error) => {
        alert("Houve um erro ao remover o telefone: " + error.message);
      });
      
    }

    vm.removerEmail = function(index){
      let removido = vm.cliente.emails[index];
      
      EmailService.removerPorId(removido.id)
      .then((response) => {
        vm.cliente.emails.splice(index, 1)
        alert("Email removido com sucesso!")
      }).catch((error) => {
        alert("Houve um erro ao remover o email: " + error.message);
      });
      
    }

    vm.habilitar = function(){
      vm.habilitarBotao = true;
    }

    vm.desabilitar = function(){
      vm.habilitarBotao = false;
    }

    vm.atualizarCliente = function(){
      if(vm.cliente === null){
        alert('Nenhum cliente selecionado para edição!');
      }

      if(vm.formEdicaoCliente.$valid){
        vm.formIsValid = true;

        ClienteService.atualizarCliente(vm.cliente)
          .then((response) => {
            alert('Cliente ID #' + vm.cliente.id + ' atualizado com sucesso!');
        }).catch((error) => {
          alert('Houve um erro ao tentar atualizar o cliente: ' + error.message);
        });

      }else {
        vm.formIsValid = false;
      }
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
      window.history.back();
    };
  }
}//Fim classe
ClienteEdicaoController.$inject = ['$stateParams', '$state', 'ClienteService', 'TelefoneService', 'EmailService'];