(function(){
	var AllOrdersController = function($scope, customersFactory){
		$scope.orders = null;
		$scope.ordersTotal = null;
		$scope.totalType;
		function init() {
			customersFactory.getOrders()
				.success(function(orders){
					$scope.orders = orders;
					getOrdersTotal();
				})
				.error(function(data, status, header, config){

				});
		}
		function getOrdersTotal(){
			var total=0;
			for(var i=0, len=$scope.orders.length;i<len;i++) {
				total += $scope.orders[i].total;
			}
			$scope.ordersTotal = total;
			$scope.totalType = ($scope.ordersTotal > 10) ? 'success' : 'danger'; 
		}

		init();
	};

	AllOrdersController.$inject = ['$scope', 'customersFactory'];
	angular.module('app').controller('AllOrdersController', AllOrdersController);
}());