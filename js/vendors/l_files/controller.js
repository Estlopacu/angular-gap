// MyCars Controllers
MyCars.controller('homeController',
	function($scope, myCarsService, $log) {
		myCarsService.getAllCars(function(data){
			$scope.cars = data;
		});
	}
);