(function(){
	var app = angular.module('app',['ngRoute', 'ngAnimate']);

	app.config(function($routeProvider){
		//routes - path view control
		$routeProvider
			.when('/', {
				controller: 'CustomersController',
				templateUrl: '/app/views/customers.html'
			})
			.when('/orders/:customerId', {
				controller: 'OrdersController',
				templateUrl: '/app/views/orders.html'
			})
			.when('/orders', {
				controller: 'AllOrdersController',
				templateUrl: '/app/views/allorders.html'
			})
			.otherwise({redirectTo:'/'});
			// .when('/orders', {
			// 	controller: 'OrdersController',
			// 	templateUrl: '/app/views/orders.html'

			// })

			// .otherwise({ redirectTo: '/' });
	});
}())
