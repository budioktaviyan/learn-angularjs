var gameListApp = angular.module('gameListApp', []);

gameListApp.controller('GameListController', function ($scope, $http) {
  $http.get('data/games.json').success(function(data) {
    $scope.games = data;
  });

  $scope.orderProp = 'id';
});