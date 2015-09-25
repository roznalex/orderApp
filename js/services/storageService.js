app.factory('storageService', function() {

	var ordersList = [];

	return {
	    orders: ordersList,
	    updateOrders: function (ordersArr) {
	        if (window.localStorage && ordersArr) {
	            localStorage.setItem("orders", angular.toJson(ordersArr));
	        }
	        ordersList = ordersArr;
	    },
	    getOrders: function () {
	       ordersList = angular.fromJson( localStorage.getItem("orders") );
	       return ordersList ? ordersList : [];
	   }
	};
});