'use strict';

angular.module('myApp.providers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/providers', {
    templateUrl: 'providers/providers.html',
    controller: 'ProvidersCtrl'
  });
}])

.controller('ProvidersCtrl', ['$scope', '$http', function($scope, $http) {
  var url = 'http://localhost:3001/providers';
  $scope.providers = [];
  $scope.getFeedUrl = (feedUrl) => {
    if(feedUrl.attributes && feedUrl.attributes.href) {
      return feedUrl.attributes.href;
    } else {
      return feedUrl;
    }
  };
  $http.get(url).then((result) => {
    $scope.providers = result.data;
  });
}]);