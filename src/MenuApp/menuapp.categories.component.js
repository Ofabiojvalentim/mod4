(function(){

'use strict';

angular.module('MenuApp')
.component('listCategories', {
	templateUrl: 'template/menuappCategoriesTemplate.html',
	controller: MenuAppComponentController
});



MenuAppComponentController.$inject = ['MenuService'];

function MenuAppComponentController(MenuService){
var $ctrl = this;

	$ctrl.controller_name = "Select one category";

	var promise = MenuService.getAllCategories();

	promise.then(function(response){
		$ctrl.categories = response.data;
		console.log($ctrl.categories);

	}).catch(function(error){
		console.log("error on promise");
	});


	$ctrl.MenuItems = function(shortName){

		
		var promise = MenuService.getItemsForCategory(shortName);

		promise.then(function (response){
			console.log(response.data);
		}).catch(function(error){
			console.log(error);
		})
	};
};

})();