angular.module('jazzyWebsiteApp', [])
.controller('TabController', ['$scope', function ($scope) {
    $scope.tabs = [{
            title: 'jazzygasper',
            url: 'home.html'
        },{
            title: 'about',
            url: 'about.html'
        }, {
            title: 'cv',
            url: 'cv.html'
        }, {
            title: 'portfolio',
            url: 'portfolio.html'
    }, {
            title: 'contact',
            url: 'contact.html'
    }];

    $scope.currentTab = 'home.html';

    $scope.header = 'angular shiz';

    $scope.onClickTab = function(tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}]);
