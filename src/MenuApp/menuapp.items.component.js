(function(){

'use strict';

angular.module('MenuApp')
.component('listItems', {
	templateUrl: 'template/menuappItemsTemplate.html',
	controller: MenuAppItemController
});



MenuAppItemController.$inject = ['MenuService'];

function MenuAppItemController(MenuService){
var $ctrl = this;

	$ctrl.controller_name = "teste"


	$ctrl.MenuItems = function(shortName){

		
		var promise = MenuService.getItemsForCategory(shortName);

		promise.then(function (response){
			console.log(response.data);
			
		}).catch(function(error){
			
		})
	};
};

})();