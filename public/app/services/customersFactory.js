(function(){
	var customersFactory = function($http){
		var factory = {};
		factory.getCustomers = function() {
			return $http.get('api/customer');
		}

		factory.getCustomer = function(customerId) {
			return $http.get('api/customer/'+ customerId);
		}

		factory.getOrders = function(){return $http.get('api/order')};
		factory.deleteCustomer = function(customerId) {
			return $http.delete('api/customer/' + customerId);
		};

		return factory;
	};
	customersFactory.$inject = ['$http'];

	angular.module('app').factory('customersFactory', customersFactory);

}())