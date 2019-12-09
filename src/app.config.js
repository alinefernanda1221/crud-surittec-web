routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
  /**HOME */
  let homeState = {
    name: 'home',
    url: '/home',
    templateUrl: './modulos/home/home.view.html',
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
    params: { usuario: null }

  }
  $stateProvider.state(homeState);

  /**LOGIN */
  let loginState = {
    name: 'login',
    url: '/login',
    templateUrl: './modulos/login/login-view.html',
    controller: 'LoginController',
    controllerAs: 'loginCtrl',
    params: { login: null }
  }
  $stateProvider.state(loginState);


  /**CLIENTE CADASTRO */
  let clienteCadastroState = {
    name: 'cliente-cadastro',
    url: '/cliente/cadastro',
    templateUrl: './modulos/cliente/cadastro/cliente-cadastro-view.html',
    controller: 'ClienteCadastroController',
    controllerAs: 'clienteCadCtrl',
    cache: false
  }
  $stateProvider.state(clienteCadastroState);

  /**CLIENTE PESQUISA*/
  let clientePesquisa = {
    name: 'cliente-pesquisa',
    url: '/cliente/pesquisa',
    templateUrl: './modulos/cliente/pesquisa/cliente-pesquisa-view.html',
    controller: 'ClientePesquisaController',
    controllerAs: 'clientePesquisaCtrl'
  }
  $stateProvider.state(clientePesquisa);

  /**CLIENTE EDICAO*/
  let clienteEdicao = {
    name: 'cliente-edicao',
    url: '/cliente/edicao',
    templateUrl: './modulos/cliente/edicao/cliente-edicao-view.html',
    controller: 'ClienteEdicaoController',
    controllerAs: 'clienteEdicaoCtrl',
    params: { cliente: null }

  }
  $stateProvider.state(clienteEdicao);


  $urlRouterProvider.otherwise('/login')

}