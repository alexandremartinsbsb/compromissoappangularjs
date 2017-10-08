angular.module('app').controller('UsuarioController', function($scope, $routeParams, $location, recursoUsuario, cadastroUsuarioServico) {

    $scope.usuario = {};
    $scope.mensagem = '';
    $scope.parametrosUrl = $location.path().split(/[\s/]+/);
    $scope.visualiza = false;

    if ($scope.parametrosUrl[2] == 'visualiza') {
        $scope.visualiza = true;
    }

    if ($routeParams.pk) {
        recursoUsuario.get({ pk: $routeParams.pk }, function(usuario) {
            $scope.usuario = usuario;
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possivel recuperar o usuário';
        });
    }

    $scope.submeter = function() {
        if ($scope.formulario.$valid) {
            cadastroUsuarioServico.cadastrar($scope.usuario)
                .then(function(dados) {
                    $scope.mensagem = dados.mensagem;
                    if (dados.inclusao) {
                        $scope.usuario = {};
                    }
                    _getMensagem();
                })
                .catch(function(dados) {
                    $scope.mensagem = dados.mensagem;
                    _getMensagem();
                });
        } else {
            $scope.mensagem = 'Informe os campos obrigatorios.';
            _getMensagem();
        }
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