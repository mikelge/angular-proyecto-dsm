

angular.module('NotasApp')
.controller('NotaNuevaController', function($scope, Nota,$location) {
  this.nota = {};
  $scope.nota = new Nota();//////////////resource
  this.guardaNuevaNota = function() {
    console.log(this.nota);
    var controller = this;
    controller.errors = null;
    $scope.nota.$save(this.nota)/////////////resource
    .catch(function(nota) {
      controller.errors = nota.data.error;
    })
   
    this.nota = {};
    $location.path("/");
  };
});

