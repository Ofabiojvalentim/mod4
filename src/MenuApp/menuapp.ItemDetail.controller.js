(function(){

'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['item'];

function ItemDetailController(item){
	var itemdetail = this;

	itemdetail.name = item.name;
	itemdetail.description = item.description;

};

})();