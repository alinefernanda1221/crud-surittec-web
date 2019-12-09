import angular from 'angular';
import uirouter from 'angular-ui-router';

import ClienteCadastroController from './cliente-cadastro-controller';

/**SERVICES */
import ClienteService from '../../../servicos/cliente-service';
import EnderecoService from '../../../servicos/endereco-service';
import TelefoneService from '../../../servicos/telefone-service';

export default angular.module('myApp.cliente.cadastro', [uirouter, ClienteService, EnderecoService, TelefoneService])
  .controller('ClienteCadastroController', ClienteCadastroController)
  .name;

  