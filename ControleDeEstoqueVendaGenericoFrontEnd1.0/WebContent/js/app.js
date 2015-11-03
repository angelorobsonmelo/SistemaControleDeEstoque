(function(){

	'use strict';
	angular.module('ielApp',['ui.bootstrap','ui.calendar','ngDragDrop','ngRoute','checklist-model','mgo-angular-wizard','ui.mask','ngSanitize'])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when('/index', {
			controller: 'PainelCtrl',
			templateUrl: 'partials/painel/painel_evento.html'
		})
		.when('/blank', {
			controller: 'ClienteCtrl',
			templateUrl: 'blank.html'
		})
		.when('/clientes', {
			controller: 'ClienteCtrl',
			templateUrl: 'partials/cliente/cliente.html'
		})
		.when('/cliente/:id', {
			controller: 'ClienteCtrl',
			templateUrl: 'partials/cliente/cliente_ver.html'
		})
		.when('/consultor', {
			controller: 'ConsultorCtrl',
			templateUrl: 'partials/consultor/consultor.html'
		})
		.when('/consultor/lista',{
			controller: 'ConsultorCtrl',
			templateUrl: 'partials/consultor/consultor_listar.html'
		})
		.when('/consultor/cadastro',{
			controller: 'ConsultorCadCtrl',
			templateUrl: 'partials/consultor/consultor_cadastro.html'
		})
		.when('/eventos',{
			controller: 'EventoCtrl',
			templateUrl: 'partials/evento/eventos.html'
		})
		.when('/eventos/listar',{
			controller : 'EventoCtrl',
			templateUrl : 'partials/evento/eventos.html'
		})
		.when('/eventos/calendario',{
			controller : 'CalendarioCtrl',
			templateUrl: 'partials/calendario/calendario_eventos.html'
		})
		.when('/',{
			controller : 'LoginCtrl',
			templateUrl: 'partials/login/login.html'
				
		})
		.when('/cad-usuario', {
			controller: 'CadUsuarioCtrl',
			templateUrl: 'partials/cad-usuario/cad-usuario.html'
		})
		.when('/redefinir-senha/:email', {

			controller: 'RedefinirSenhaCtrl',
			templateUrl: 'partials/redefinir-senha/redefinir-senha.html'

		})
		.otherwise('/');
	}]);
	
	angular.module('ielApp')
    .filter('tel', function () {
        return function (text) {
                return ((text.substr(0, 0)+ "("+text).substr(0,3)+ ")"+text.slice(2)).substr(0,8)+"-"+text.slice(6);
        }
    });
}());