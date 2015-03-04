(function(){

	var CustomersController = function ($scope, $log, customersFactory, appSettings){
		$scope.sortBy = 'name';
		$scope.reverse = false;
		$scope.appSettings = appSettings;

		function init() {
			customersFactory.getCustomers()
				.success(function(customers){
					$scope.customers = customers;
				})
				.error(function(data, status, header, config){
					$log.log('error', arguments);
				});
		}

		init();

		$scope.doSort = function(propName){
			$scope.sortBy=propName;
			$scope.reverse= !$scope.reverse;
		};
		$scope.deleteCustomer = function(customerId) {
			customersFactory.deleteCustomer(customerId)
				.success(function(status){
					if(status){
						for (var i=0, len=$scope.customers.length; i<len;i++){
							if($scope.customers[i].id === customerId) {
								$scope.customers.splice(i,1);
								break;
							}
						}
					} else {
						$window.alert('unable to delete customer');
					}
				})
				.error(function(data, status, headers, config){
					
				});
		};
	};

	CustomersController.$inject = ['$scope','$log', 'customersFactory', 'appSettings'];

	angular.module('app')
		.controller('CustomersController',CustomersController);
}());
