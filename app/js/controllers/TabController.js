app = angular.module('jazzyWebsiteApp', []);
app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});

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

    $scope.onClickTab = function(tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }

    $scope.modalShown = false;
    $scope.toggleModal = function() {
      $scope.modalShown = !$scope.modalShown;
    };
}]);
