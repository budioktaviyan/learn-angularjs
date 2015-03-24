var gameListApp = angular.module('gameListApp', []);

gameListApp.controller('GameListController', function ($scope) {
  $scope.games = [
    {'name': 'Assasins Creed',
     'desc': 'Game bunuh2an'},
    {'name': 'Grand Theft Auto',
     'desc': 'Game bokep!'},
    {'name': 'Mafia Wars',
     'desc': 'Game Fesbuk'},
    {'name': '?',
     'desc': '???'}
  ];
});