angular.module('app').controller('UsuariosController', function($scope, recursoUsuario) {

    $scope.mensagem = '';
    $scope.usuarios = [];

    recursoUsuario.query(function(usuarios) {
        $scope.usuarios = usuarios;
    }, function(erro) {
        console.log(error);
    });

    $scope.remover = function(usuario) {
        recursoUsuario.delete({ pk: usuario.pk }, function() {
            var indiceUsuario = $scope.usuarios.indexOf(usuario);
            $scope.usuarios.splice(indiceUsuario, 1);
            $scope.mensagem = 'Usuário '.concat(usuario.nome).concat(' removido com sucesso!');
            _getMensagem();
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Erro ao tentar remover o usuário '.concat(usuario.nome);
            _getMensagem();
        });
    };

    function _getMensagem() {
        var notification = document.querySelector('.mdl-js-snackbar');
        notification.classList.add('mensagem-sucesso');
        var data = {
            message: $scope.mensagem,
            /*             actionHandler: function(event) {},
                        actionText: 'ok', */
            timeout: 3000
        };
        notification.MaterialSnackbar.showSnackbar(data);
    };
});