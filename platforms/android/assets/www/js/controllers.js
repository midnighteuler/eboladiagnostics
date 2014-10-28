angular.module('starter.controllers', [])

.controller('CommonCtrl', function($scope) {
})

.controller('ScenariosCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('ContactCtrl', function($scope) {
});
