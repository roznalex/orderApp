describe('orderController test: ', function() {
	var controller,
		mockScope = {};

	beforeEach(function() {
		angular.mock.module('orderApp');
		angular.mock.inject(function($controller, $rootScope, storageService) {
			mockScope = $rootScope.$new();
			controller = $controller('orderController', {
				$scope: mockScope,
				_storageService: storageService
			});
		});
	});

	it("Edit mode is created", function() {
		expect(mockScope.editMode).toEqual(false);
	});

	it("Adding of order", function() {
		mockScope.orders = [];
		mockScope.orderName = 'order';
		mockScope.orderAmount = 'amount';
		mockScope.customerName = 'name';
		mockScope.addOrder();
		expect(mockScope.orders.length).toEqual(1);
	});

	it("Removing of orders", function() {
		mockScope.removeOrders();
		expect(mockScope.orders.length).toEqual(0);
	});
});