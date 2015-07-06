var MyCars = angular.module("MyCars", ['ngRoute']);

MyCars.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when("/", {
			templateUrl: "partials/home.html",
			controller: "homeController"
		}).
		when("/details/:id", {
			templateUrl: "partials/details.html",
			controller: "detailsController"
		}).
		when("/admin", {
			templateUrl: "partials/admin.html",
			controller: "adminController"
		}).
		when("/delete/:id/:name", {
			templateUrl: "partials/confirmDelete.html",
			controller: "deleteController"
		}).
		when("/addnew", {
			templateUrl: "partials/addNew.html",
			controller: "addNewController"
		}).
		when("/edit/:id", {
			templateUrl: "partials/edit.html",
			controller: "editController"
		}).
		when("/compare", {
			templateUrl: "partials/compare.html",
			controller: "compareController"
		}).
		when("/compareCars/:id1/:id2/:id3", {
			templateUrl: "partials/compareCars.html",
			controller: "compareCarsController"
		}).
		otherwise({
			redirectTo: "/"
		});
	}
]);

jQuery(document).ready(function($) {
	$("body").on("click", '.compareSelected', function() {
		if ($(this).is(':checked')) {
			$(this).next().show();
		} else {
			$(this).next().hide();
		}
	});
});