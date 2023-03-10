(function(){

'use strict';

angular.module('MenuApp')
.controller('itemStatemController', itemStatemController);

itemStatemController.$inject = ['item'];

function itemStatemController(item){

	var itemdetail = this;

	itemdetail.arrayvalue = item;

	
	

};

})();