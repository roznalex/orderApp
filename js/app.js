var app = angular.module('orderApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'orderController',
			templateUrl: 'views/main.html'
		})
		.otherwise({ 
      		redirectTo: '/' 
    	});
});