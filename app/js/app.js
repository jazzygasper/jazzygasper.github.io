var jazzyWebsiteApp = angular.module('jazzyWebsiteApp', ['ngRoute']);

jazzyWebsiteApp.config(function ($routeProvider, $locationProvider) {

   $routeProvider
    .when('/',
        {
            controller: 'HomeController',
            templateUrl: 'views/welcome.html'
        })
    .when('/about',
        {
            controller: 'AboutController',
            templateUrl: 'views/about.html'
        })
    .when('/about',
        {
            controller: 'PortfolioController',
            templateUrl: 'views/portfolio.html'
        })
    .when('/cv',
        {
            controller: 'CvController',
            templateUrl: 'views/cv.html'
        })
    .when('/contact',
        {
            controller: 'ContactController',
            templateUrl: 'views/contact.html'
        })
    .otherwise({ redirectTo: '/' });
});
