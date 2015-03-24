var gameListApp = angular.module('gameListApp', []);

gameListApp.controller('GameListController', function ($scope) {
  $scope.games = [
    {'name': 'Assasins Creed',
     'desc': 'Assasination Game'},
    {'name': 'Grand Theft Auto',
     'desc': 'Real Simulation Game'},
    {'name': 'Mafia Wars',
     'desc': 'Mafia Games'},
    {'name': 'Unknown',
     'desc': 'Free to Decide'}
  ];
});