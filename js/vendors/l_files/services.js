// MyCars services
MyCars.service('myCarsService', ['$http', function($http){
	return {
		getAllCars : function(callback){
			return $http.get("Api/getAllCars.php").success(callback);
		}
	}
}]);

