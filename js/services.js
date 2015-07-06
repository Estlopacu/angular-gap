// MyCars services
MyCars.service('myCarsService', ['$http', function($http){
	return {
		getAllCars : function(callback){
			return $http.get("Api/getAllCars.php").success(callback);
		},
		insertCar : function(price, brand, model, year, color, deal,price,imgUrl,callback){
			return $http.get("Api/insertCar.php?price="+price+"&brand="+brand+"&model="+model+"&year="+year+"&color="+color+"&deal="+deal+"&imgUrl="+imgUrl+";").success(callback);
		},
		editCar : function(id,price, brand, model, year, color, deal,price,imgUrl,callback){
			return $http.get("Api/updateCar.php?id="+id+"&price="+price+"&brand="+brand+"&model="+model+"&year="+year+"&color="+color+"&deal="+deal+"&imgUrl="+imgUrl).success(callback);
		},
		getCar : function(id, callback){
			return $http.get("Api/getCar.php?id="+id).success(callback);
		},
		deleteCar : function(id, callback){
			return $http.get("Api/deleteCar.php?id="+id).success(callback);
		}
	}
}]);

