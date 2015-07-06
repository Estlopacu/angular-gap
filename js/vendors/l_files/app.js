var MyCars = angular.module("MyCars",['ngRoute']);

MyCars.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
		when("/",{
			templateUrl: "partials/home.html",
			controller: "homeController"
		}).
		otherwise({
			redirectTo: "/"
		});
}]);
