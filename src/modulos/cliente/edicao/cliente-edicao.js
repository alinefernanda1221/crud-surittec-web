import angular from 'angular';
import uirouter from 'angular-ui-router';

import ClienteEdicaoController from './cliente-edicao-controller';

import ClienteService from '../../../servicos/cliente-service';
import EmailService from '../../../servicos/email-service';

export default angular.module('myApp.cliente.edicao', [uirouter, ClienteService, EmailService])
  .controller('ClienteEdicaoController', ClienteEdicaoController)
  .name;

  