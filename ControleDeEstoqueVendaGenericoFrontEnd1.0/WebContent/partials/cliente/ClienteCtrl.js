(function(){
    'use strict';
    angular.module('ielApp')
        .controller('ClienteCtrl',['$scope','$modal','ClientesService', '$routeParams', '$rootScope', '$location', 'PesquisaService', function($scope,$modal,ClientesService,$routeParams, $rootScope, $location,PesquisaService){
        	$rootScope.titulo = "Cliente";
        	$rootScope.activetab = $location.path();
        	$rootScope.esconderHeader = true;
            $scope.alerts = [
            ];

            
            if($routeParams.id)
	            ClientesService.getCliente($routeParams.id).then(function(retorno){
	            	$scope.clienteVisto = retorno;
	            	console.log(retorno);
	            });


            PesquisaService.getPesquisas().then(function(retorno){
            	$scope.pesquisas = retorno;
            });
            
            ClientesService.getClientes().then(function(retorno){
            	$scope.clientes = retorno;
            });
            
            $scope.removerCliente = function(id){
                ClientesService.deleteCliente(id);
            };

            $scope.abrirCadastroCliente = function(){
                var modalInstance = $modal.open({
                    templateUrl: 'add_cliente_modal',
                    controller: $scope.model
                });
            };
            $scope.abrirEdicaoCliente = function(clienteId){
                var modalInstance = $modal.open({
                    templateUrl: 'add_cliente_modal',
                    controller: $scope.edicao,
                    resolve: {
                        id: function () {
                            return clienteId;
                        }
                    }
                });
            };

            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };

            $scope.model = function($scope,$modalInstance,ClientesService){
                $scope.alerts = [];
                $scope.cliente = {};
                PesquisaService.getPesquisas().then(function(retorno){
                	$scope.pesquisasCad = retorno;
                });
                
                $scope.cancel = function(){
                    $modalInstance.dismiss('cancel');
                };

                $scope.add = function(){
                	console.log($scope.cliente);
                	
                    ClientesService.addCliente($scope.cliente);
                    $modalInstance.dismiss('cancel');
                };

                $scope.save = function(){
                    ClientesService.editCliente(id,$scope.cliente);
                    //$scope.cliente.$save();
                    $modalInstance.dismiss('cancel');
                };

            };
            
            $scope.edicao = function($scope,$modalInstance,id,ClientesService){
                $scope.alerts = [];
                
                $scope.checar = function(){
                	console.log("asdsd");
                }
                ClientesService.getCliente(id).then(function(retorno){
	            	$scope.cliente = retorno;
	            });	
                
                PesquisaService.getPesquisas().then(function(retorno){
                	$scope.pesquisasCad = retorno;
                });
                
                $scope.cancel = function(){
                    $modalInstance.dismiss('cancel');
                };

                $scope.save = function(){
                    ClientesService.editCliente(id,$scope.cliente);
                    //$scope.cliente.$save();
                    $modalInstance.dismiss('cancel');
                };

            };
            

        }]);
}());