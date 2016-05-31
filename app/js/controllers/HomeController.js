jazzyWebsiteApp.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
  $http.get('/views/welcome.html').success(function(){
    $scope.header = "Welcome to my website";
  })
}]);
