(function(){

	var OrdersController = function ($scope, $routeParams, customersFactory){

		var customerId = $routeParams.customerId;

		function init() {
			customersFactory.getCustomer(customerId)
				.success(function(customer){
					$scope.customer = customer;
				})
				.error(function(){

				});
		}
		 
		init();
	};

	OrdersController.$inject = ['$scope', '$routeParams','customersFactory'];

	angular.module('app')
		.controller('OrdersController',OrdersController);
}());
