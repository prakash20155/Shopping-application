var myApp=angular.module('myshopapps', ['ngRoute','ui.bootstrap','ngFileUpload']);

myApp.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when('/', {
        templateUrl: '/apps/partialViews/homepage/main.html',
        controller: 'homeCtrl'
    });
    $routeProvider.when('/login', {
        templateUrl: '/apps/partialViews/account/login.html'
        //controller: ''
    });
    $routeProvider.when('/register', {
        templateUrl: '/apps/partialViews/account/login.html'
        //controller: ''
    });
    $routeProvider.when('/p/details', {
        templateUrl: '/apps/partialViews/product/details.html',
        controller: 'productDetailsCtrl'
    });
    $routeProvider.when('/p/:name', {
        templateUrl: '/apps/partialViews/product/main.html',
        controller: 'productMainCtrl'
    });
    $routeProvider.when('/brands', {
        templateUrl: '/apps/partialViews/brand/main.html',
        controller: 'brandCtrl'
    });
    $routeProvider.when('/deals', {
        templateUrl: '/apps/partialViews/deal-and-promo/latestdeal.html',
        controller: 'brandCtrl'
    });
    $routeProvider.when('/admin/newproduct', {
        templateUrl: '/apps/partialViews/admin/newproduct.html',
        controller: 'productManagementCtrl'
    });
    $routeProvider.when('/admin/newcategory', {
        templateUrl: '/apps/partialViews/admin/newcategory.html',
        controller: 'categoryManagementCtrl'
    });
    $routeProvider.when('/admin/newbrands', {
        templateUrl: '/apps/partialViews/admin/newbrand.html',
        controller: 'brandManagementCtrl'
    });
    $routeProvider.when('/pages/aboutus', {
        templateUrl: '/apps/partialViews/pages/aboutus.html',
        controller: 'adminCtrl'
    });
    $routeProvider.otherwise({redirectTo: '/404'});

}]);