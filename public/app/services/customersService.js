(function(){
	var customersService = function(){
		var customers = [
			{
				joined:'2000-12-02', name:'John', city:'Chicago', orderTotal:9.956,
				id: 1,
				orders: [
					{
						id: 1,
						product: 'Shoes',
						total: 9.956
					}
				]
			},
			{
				joined:'1965-12-02', name:'Zed', city:'Las Vegas', orderTotal:19.99,
				id: 2,
				orders: [
					{
						id:2,
						product: 'Baseball',
						total:9.995
					},
					{
						id: 3,
						product: 'Bat',
						total: 9.995
					}
				]
			},
			{
				joined:'1944-12-02', name:'Tina', city:'New York', orderTotal:44.99,
				id: 3,
				orders:[]
			},
			{
				joined:'1995-12-02', name:'Dave', city:'Seattle', orderTotal:101.5,
				id: 4,
				orders:[]
			}
		];

		
		this.getCustomers = function() {
			return customers;
		}

		this.getCustomer = function(customerId) {
			for(var i=0, len = customers.length; i<len; i++){
				if(customers[i].id === parseInt(customerId, 10)) {
					return customers[i];
				}
			}
			return {};
		}

		// return factory;
	};

	angular.module('app').service('customersService', customersService);

}());