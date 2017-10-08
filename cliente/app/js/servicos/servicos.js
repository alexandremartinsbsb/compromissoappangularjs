angular
    .module("servicos", ["ngResource"])
    .service("recursoUsuario", function($resource) {
        return $resource(
            "http://localhost:8080/compromissoapp-0.0.1-SNAPSHOT/rs/usuarios/:pk", null, {
                atualiza: {
                    method: "PUT"
                }
            }
        );
    })
    .service("cadastroUsuarioServico", function(recursoUsuario, $q) {
        this.cadastrar = function(usuario) {
            return $q(function(resolvido, rejeitado) {
                if (usuario.pk) {
                    recursoUsuario.atualiza({ pk: usuario.pk },
                        usuario,
                        function() {
                            resolvido({
                                mensagem: "Usuario "
                                    .concat(usuario.nome)
                                    .concat(" atualizado com sucesso!"),
                                inclusao: false
                            });
                        },
                        function(erro) {
                            console.log(erro);
                            rejeitado({
                                mensagem: "Não foi possivel alterar o usuario ".concat(
                                    usuario.nome
                                )
                            });
                        }
                    );
                } else {
                    recursoUsuario.save(
                        usuario,
                        function() {
                            resolvido({
                                mensagem: "Usuario "
                                    .concat(usuario.nome)
                                    .concat(" incluido com sucesso!"),
                                inclusao: true
                            });
                        },
                        function(erro) {
                            console.log(erro);
                            rejeitado({
                                mensagem: "Não foi possivel incluir o usuario ".concat(
                                    usuario.nome
                                )
                            });
                        }
                    );
                }
            });
        };
    });