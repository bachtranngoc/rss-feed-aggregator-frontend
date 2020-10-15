'use strict';

angular.module('myApp.feeds', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/feeds', {
    templateUrl: 'feeds/feeds.html',
    controller: 'FeedsCtrl'
  });
}])

.controller('FeedsCtrl', ['$scope', '$http', function($scope, $http) {
  var url = 'http://localhost:3001/feeds';
  $scope.feeds = [];

  $http.get(url).then((result) => {
    $scope.feeds = result.data;
  });
}]);