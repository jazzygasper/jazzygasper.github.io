jazzyWebsiteApp.controller('AboutController', ['$scope', '$http', function ($scope, $http) {
  $http.get('/views/about.html').success(function(){
    $scope.header = "About";
  })
}]);
