var gameListApp = angular.module('gameListApp', []);

gameListApp.controller('GameListController', function ($scope) {
  $scope.games = [
    {'name': 'Assasins Creed',
     'desc': 'Assasination Game',
     'latest': 4},
    {'name': 'Grand Theft Auto',
     'desc': 'Real Simulation Game',
     'latest': 3},
    {'name': 'Mafia Wars',
     'desc': 'Mafia Games',
     'latest': 2},
    {'name': 'Unknown',
     'desc': 'Free to Decide',
     'latest': 1}
  ];

  $scope.orderProp = 'latest';
});