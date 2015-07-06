// MyCars Controllers
MyCars.controller('homeController',
	function($scope, myCarsService, $log) {
		myCarsService.getAllCars(function(data) {
			$scope.cars = data;
		});
	}
);

MyCars.controller('detailsController',
	function($scope, myCarsService, $log, $routeParams) {
		myCarsService.getCar($routeParams.id, function(data) {
			$scope.car = data;
		});
	}
);

MyCars.controller('adminController',
	function($scope, myCarsService, $location) {
		myCarsService.getAllCars(function(data) {
			$scope.cars = data;
		});
		$scope.addNew = function() {
			$location.path("/addnew");
		}
	}
);

MyCars.controller('deleteController',
	function($scope, myCarsService, $log, $routeParams, $location) {
		$scope.carName = $routeParams.name;

		$scope.delete = function() {
			myCarsService.deleteCar($routeParams.id, function(data) {
				alert("Car Deleted");
				$location.path("/");
			})
		}

		$scope.noDelete = function() {
			$location.path("#/admin");
		}
	}
);

MyCars.controller('addNewController',
	function($scope, myCarsService, $log, $routeParams, $location) {
		$scope.insert = function() {
			var deal = ($scope.deal == true) ? 1 : 0;
			myCarsService.insertCar(
				$scope.price, $scope.brand, $scope.model, $scope.year, $scope.color, deal, $scope.price, $scope.imgUrl,
				function(data) {
					alert("Car successfully added");
					$location.path("#/admin");
				});
		}
	}
);

MyCars.controller('editController',
	function($scope, myCarsService, $log, $routeParams, $location) {
		myCarsService.getCar($routeParams.id, function(data) {
			$scope.car = data;
			$scope.brand = data.brand;
			$scope.model = data.model;
			$scope.year = parseInt(data.year);
			$scope.color = data.color;
			$scope.price = data.price;
			$scope.imgUrl = data.imgUrl;
			if (data.deal != "0") {
				$(".check").attr("checked", "checked");
			} else {
				$(".check").removeAttr("checked");
			};
		});

		$scope.edit = function() {
			var deal = ($(".check").is(':checked')) ? 1 : 0;

			myCarsService.editCar(
				$routeParams.id, $scope.price, $scope.brand, $scope.model, $scope.year, $scope.color, deal, $scope.price, $scope.imgUrl,
				function(data) {
					alert("Car successfully updated");
					$location.path("/");
				});
		}
	}
);

MyCars.controller('compareController',
	function($scope, myCarsService, $log, $location) {
		myCarsService.getAllCars(function(data) {
			$scope.cars = data;
		});

		$scope.compare = function() {
			if ($(".compareSelected:checked:enabled").length == 3) {
				var carsCompare = new Array(3);
				$(".compareSelected:checked:enabled").each(function(index, value) {
					carsCompare[index] = $(this).parents(".list-cars").attr("data-carid");
				});

				$location.path("/compareCars/" + carsCompare[0] + "/" + carsCompare[1] + "/" + carsCompare[2] + "");
			} else {
				alert("Please select 3 cars for compare only");
			};
		}
	}
);

MyCars.controller('compareCarsController',
	function($scope, myCarsService, $log, $location, $routeParams) {

		myCarsService.getCar($routeParams.id1, function(data) {
			$scope.car1 = {
				"brand": data.brand,
				"model": data.model,
				'year': data.year,
				'color': data.color
			};
		});

		myCarsService.getCar($routeParams.id2, function(data) {
			$scope.car2 = {
				"brand": data.brand,
				"model": data.model,
				'year': data.year,
				'color': data.color
			};
		});

		myCarsService.getCar($routeParams.id3, function(data) {
			$scope.car3 = {
				"brand": data.brand,
				"model": data.model,
				'year': data.year,
				'color': data.color
			};
		});

	}
);