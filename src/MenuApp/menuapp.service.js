(function(){

'use strict';

angular.module('MenuApp')
.service('MenuService', MenuService);

MenuService.$inject = ['$http', 'ApiBasePath'];
 
	function MenuService($http, ApiBasePath){
	    var service = this;
	  
	    service.getAllCategories = function () {
	      var response = $http({
	        method: "GET",
	        url: (ApiBasePath + "/categories.json")});
	  
	      return response;
		};


		service.getItemsForCategory = function(shortName){
			var response = $http({
	        method: "GET",
	        url: (ApiBasePath + "/menu_items/"+ shortName +".json")

	    	});

	    	console.log(shortName);
	  
	      return response;
		};
		
	}


	
})();

 