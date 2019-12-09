import angular from 'angular';
import uirouter from 'angular-ui-router';

import ClientePesquisaController from './cliente-pesquisa-controller';
import ClienteService from '../../../servicos/cliente-service';

export default angular.module('myApp.cliente.pesquisa', [uirouter, ClienteService])
  .controller('ClientePesquisaController', ClientePesquisaController)
  .name;

  