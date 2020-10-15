'use strict';

angular.module('myApp.configurations', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/configurations', {
            templateUrl: 'configurations/configurations.html',
            controller: 'ConfigurationsCtrl'
        });
    }])

    .controller('ConfigurationsCtrl', ['$scope', '$http', function ($scope, $http) {
        const updateUrl = 'http://localhost:3001/feeds/update';
        const providerUrl = 'http://localhost:3001/providers';
        
        $scope.providers = [];
        $scope.updateFeeds = () => {
            $http.post(updateUrl)
                .then((result) => {
                    if (result.status === 200) {
                        alert('Success: ' + result.data.success);
                    }
                }).catch((result) => {
                    alert('Failure: ' + result.data.error);
                });
        };

        $http.get(providerUrl).then((result) => {
            $scope.providers = result.data;
        });
    }]);