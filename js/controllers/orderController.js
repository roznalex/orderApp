app.controller('orderController', ['$scope', 'storageService', function($scope, storageService) {

	$scope.editMode = false;
	$scope.orders = storageService.getOrders();

	$scope.addOrder = function() {

		var options = {
			'orderName': $scope.orderName,
			'orderAmount': $scope.orderAmount,
			'customerName': $scope.customerName
		};

		var order = createOrder(options);
	    $scope.orders.push(order);
	    storageService.updateOrders($scope.orders);
	    $scope.orderName = '';
	    $scope.orderAmount = '';
	    $scope.customerName = '';
	};

	$scope.removeOrders = function() {
		if (confirm("Are you sure?")) {
			$scope.orders = [];
			storageService.updateOrders($scope.orders);
		}
	};

	$scope.removeOrder = function(orderID) {
		if (confirm("Are you sure?")) {
			$scope.orders.forEach(function(order, index) {
				if (order.orderID == orderID) {
					$scope.orders.splice(index, 1);
					storageService.updateOrders($scope.orders);
					return;
				}
			});
		}
	};

	$scope.save = function() {
		storageService.updateOrders($scope.orders);
		$scope.editMode = false;
	}

	function createOrder(options) {
		return {
			'orderID': options.orderID || $scope.orders.length + 1,
			'createDate': options.createDate || new Date().toLocaleString(),
			'orderName': options.orderName || '',
			'orderAmount': options.orderAmount || 0,
			'customerName': options.customerName || '',
			'orderStatus': options.orderStatus || 'new'
		};
	}
}]);