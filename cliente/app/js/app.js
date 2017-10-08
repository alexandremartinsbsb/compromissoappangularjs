'use strict';

angular.module('app', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'servicos']).config(function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '../paginas/principal.html',
                controller: 'PrincipalController'
            })
            .when('/usuarios', {
                templateUrl: '../paginas/cadastro/usuarios.html',
                controller: 'UsuariosController'
            })
            .when('/usuario/novo', {
                templateUrl: '../paginas/cadastro/usuario-novo.html',
                controller: 'UsuarioController'
            })
            .when('/usuario/visualiza/:pk', {
                templateUrl: '../paginas/cadastro/usuario-novo.html',
                controller: 'UsuarioController'
            })
            .when('/usuario/edita/:pk', {
                templateUrl: '../paginas/cadastro/usuario-novo.html',
                controller: 'UsuarioController'
            })
            .otherwise({
                templateUrl: '../paginas/principal.html',
                controller: 'PrincipalController'
            });
    })
    .run(function($rootScope, $timeout) {
        $rootScope.$on('$viewContentLoaded', () => {
            $timeout(() => {
                componentHandler.upgradeAllRegistered();
            }, 100)
        })
    });