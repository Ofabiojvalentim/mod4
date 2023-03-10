(function(){

'use strict';

angular.module('MenuApp',['ui.router']);

angular.module('MenuApp')
.config(MenuAppConfig);

MenuAppConfig.$inject = ['$stateProvider','$urlRouterProvider'];

function MenuAppConfig($stateProvider,$urlRouterProvider){

	//redirect to tab1 if no other url matchers
	$urlRouterProvider.otherwise('/');

	//set up ui states
	$stateProvider.state('home',{
		url: '/',
		templateUrl: '/template/home.html'

	})
	.state('categories',{
		url: '/categories',
		templateUrl: '/template/categories.html',


	})
	.state('item',{
		url:'/categories/item/{itemShortName}',
		templateUrl:'/template/items.html',
		controller: 'itemStatemController as itemdetail',
		resolve : {
			item: ['$stateParams','MenuService',function($stateParams,MenuService){
				return MenuService.getItemsForCategory($stateParams.itemShortName).then(function(items){
					return items.data;
				});
			}]
		}
		
	});


} //EndOf MenuAppConfig



	
})();