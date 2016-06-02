

angular.module('NotasApp').controller('NotaEditarController', function($scope,$routeParams, Nota,$location) {
  /*this.nota = {};
  $scope.nota = new Nota();//////////////resource*/
  this.nota={};
  var controller = this;
  controller.nota = Nota.get({id: $routeParams.id});
  
  $scope.nota = new Nota();
  
  this.EditarNota = function (){
     
     controller.errors = null;
     controller.nota.$update(this.nota)/////////////resource
    .catch(function(nota) {
      controller.errors = nota.data.error;
    })
    this.nota = {};
      $location.path("/");
  }; 

});

