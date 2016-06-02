
/*usuarios = [
db.usuarios.insert({
  name: 'Mikel',
  bio: 'Este usuario se llama Mikel',
  email: 'mikel@correo.com'
  }),
  {
  name: 'Félix',
  bio: 'Lorem ipsum dolor sit amet',
  email: 'marko.galarza@gmail.com'
  },
  {
  name: 'Luis',
  bio: 'Sed cursus turpis vitae tortor',
  email: 'marko.galarza@gmail.com'
  },
  {
  name: 'Mario',
  bio: 'Mut a nisl id ante ipsum primis',
  email: 'marko.galarza@gmail.com'
}];*/

$.get("/usuarios", function(result) {
            usuarios=result.info;
});
angular.module('NotasApp').controller('UsuariosIndexController', function($scope, Gravatar) {
  this.usuarios = usuarios;
  $scope.gravatarUrl = function(email) {
    return Gravatar(email);
  };
});

