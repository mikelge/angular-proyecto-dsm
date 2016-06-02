
angular.module('NotasApp')
.controller('NotaShowController', function($scope,$routeParams, Nota,$location) {
  var controller = this;
  controller.nota = Nota.get({id: $routeParams.id});
  $scope.BorrarNota = function (nota){
      Nota.delete({id: $routeParams.id});
      $location.path("/");
  };  
});

  /**/

  /*$http({method: 'GET', url: '/notas/'+$routeParams.id})
	.success(function(data) {
    //console.log(data);
    controller.nota = data;
  })*/

/*Nota.encontrar($routeParams.id)
  .success(function(data) {
    controller.nota = data;
  });*/