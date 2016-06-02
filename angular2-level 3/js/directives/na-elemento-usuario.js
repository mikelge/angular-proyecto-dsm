

angular.module('NotasApp')
  .directive('naElementoUsuario', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/na-elemento-usuario.html',
      scope: {
        title: '=',
        description: '=',
        content: '=',
        image: '='
      },
      /*controller: function($scope){
        $scope.cabecera = 'Título común';
      }*/
      link: function(scope, element, attrs){
        element.on("click", function(){
          element.find("div.card p").toggleClass('hidden');
        });      
      }
    };
  });


//console.log(attrs.content);
      /*link: function(){
        $("div.card").on("click", function(){
          $("div.card p").removeClass('hidden');
        });
      }*/

      /*controller: function(){
        this.cabecera = 'Título común';
      },
      controllerAs: 'elementoNota'*/