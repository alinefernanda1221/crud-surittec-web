import angular from 'angular';
import uirouter from 'angular-ui-router';

import LoginController from './login-controller';

import LoginService from '../../servicos/login-service';

export default angular.module('myApp.login', [uirouter, LoginService])
  .controller('LoginController', LoginController)
  .name;