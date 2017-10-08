angular.module('minhasDiretivas', [])
    .directive('cabecalho', function() {

        var ddo = {};

        ddo.restric = "AE";
        ddo.transclude = true;
        ddo.templateUrl = '../../js/directives/html/cabecalho.html';

        return ddo;
    })
    .directive('menuPrincipal', function() {

        var ddo = {};

        ddo.restric = "AE";
        ddo.scope = {
            titulo: '@'
        };
        ddo.transclude = true;
        ddo.templateUrl = '../../js/directives/html/menu-principal.html';

        return ddo;
    })
    .directive('rodape', function() {

        var ddo = {};

        ddo.restric = "AE";
        ddo.scope = {
            titulo: '@'
        };
        ddo.transclude = true;
        ddo.templateUrl = '../../js/directives/html/rodape.html';

        return ddo;
    })
    .directive('breadcrumb', function() {

        var ddo = {};

        ddo.restric = "AE";
        ddo.scope = {
            tituloLink1: '@',
            link1: '@',
            tituloLink2: '@',
            link2: '@',
            tituloLink3: '@',
            link3: '@',
            tituloLink4: '@',
            link4: '@',
            tituloLink5: '@',
            link5: '@',
            tituloLink6: '@',
            link6: '@',
            tituloLink7: '@',
            link7: '@',
            tituloLink8: '@',
            link8: '@',
            tituloLink9: '@',
            link9: '@',
            tituloLink10: '@',
            link10: '@'
        };
        ddo.transclude = true;
        ddo.templateUrl = '../../js/directives/html/breadcrumb.html';

        return ddo;
    })
    .directive('botaoLink', function() {

        var ddo = {};

        ddo.restric = "EACM";
        ddo.scope = {
            nome: '@',
            classes: '@',
            link: '@'
        };
        ddo.transclude = true;
        ddo.templateUrl = '../../js/directives/html/botao-link.html';

        return ddo;
    });