(function(){
    'use strict';
    angular.module('ielApp')
        .factory('ClientesService',['$http','$q','$window',function($http,$q,$window){

        	
            function getClientes(){
            	var retorno = $q.defer();
            	$http.get('/IelServidor1.0/rest/cliente/listar')
            	.success(function(data){
            		retorno.resolve(data);
            	})
            	.error(function() {
					console.log("Problemas aconteceram ");
				});
            	return retorno.promise;
            }

            function getCliente(id){
            	var retorno = $q.defer();
            	$http.get('/IelServidor1.0/rest/cliente/selecionar/'+id)
            	.success(function(data){
            		retorno.resolve(data);
            	})
            	.error(function() {
					console.log("Problemas aconteceram ");
				});
            	return retorno.promise;
            }

            function addCliente(newCliente){
            	
        		$http.post('/IelServidor1.0/rest/cliente/salvar', newCliente)
				.success(function(d) {
					console.log(d);
					$window.location.reload();
				})
				.error(function() {
					alert("Não encontrado");
				});	
            };

            function editCliente(id, newCliente) {
            	$http.post('/IelServidor1.0/rest/cliente/salvar', newCliente)
				.success(function(d) {
					console.log(d);
					$window.location.reload();
				})
				.error(function() {
					alert("Não encontrado");
				});	
            }

            function deleteCliente(id) {
            	$http.delete('/IelServidor1.0/rest/cliente/deletar/'+id)
            	.success(function(d){
            		console.log(d);
            		$window.location.reload();
            	})
            	.error(function(){
            		alert("erro ao deletar");
            	});
            }

            return {
                getClientes: getClientes,
                getCliente: getCliente,
                addCliente: addCliente,
                editCliente: editCliente,
                deleteCliente: deleteCliente
            }

        }]);
}());