

angular.module('NotasApp')
  .directive('naElementoNota', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/na-elemento-nota.html',
      scope: {
        title: '=',
        description: '=',
        content: '=',
        image: '=',
        id:'='
      },
      /*controller: function($scope){
        $scope.cabecera = 'caca';
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