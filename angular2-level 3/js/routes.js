
angular.module('NotasApp')
.config(function($routeProvider){

  $routeProvider

  .when('/', {
    redirectTo: '/notas'
  })

  .when('/notas', {
    templateUrl: '/templates/pages/notas/index.html',
    controller: 'NotasIndexController',
    controllerAs: 'NotasIndex'
  })

  .when('/usuarios', {
    templateUrl: '/templates/pages/usuarios/index.html',
    controller: 'UsuariosIndexController',
    controllerAs: 'UsuariosIndex'
  })

  .when('/notas/nueva', {
      templateUrl: 'templates/pages/notas/nueva.html',
      controller: 'NotaNuevaController',
      controllerAs: 'notaNuevaCtrl'
    })

  .when('/notas/:id', {
    templateUrl: 'templates/pages/notas/nota-show.html',
    controller: 'NotaShowController',
    controllerAs: 'notaShowCtrl'
  })

  .when('/notas/borrar/:id', {
    templateUrl: 'templates/pages/notas/borrar.html',
    controller: 'NotaBorrarController',
    controllerAs: 'notaShowCtrl'
  })

  .when('/notas/editar/:id', {
    templateUrl: 'templates/pages/notas/editar.html',
    controller: 'NotaEditarController',
    controllerAs: 'notaEditarCtrl'
  })

  .otherwise({redirectTo: '/'});

});
