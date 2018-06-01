	var app = angular.module('myApp', ['ui.router']);
	app.controller("myCtrl",function($scope){
	});
	app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('abcnew', {
            url: '/abcnew',
            templateUrl: 'views/home.html',
            controller:"abcnewsCtrl"
                
            
        })
		.state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller:"arcCtrl"
        })
        .state('about', {
			url: '/about',
            templateUrl: 'views/about.html',
            controller:"aryCtrl"
            // we'll get to this in a bit       
        });

});
