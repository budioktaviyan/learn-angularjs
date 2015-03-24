angular.module('myApp', [])
    .controller('myController', ['$scope', function($scope) {
        $scope.lists = [];

        $scope.addList = function() {
            $scope.lists.push({text:$scope.listText, done:false});
            $scope.listText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.lists, function(myList) {
                count += myList.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldLists = $scope.lists;
            $scope.lists = [];
            angular.forEach(oldLists, function(myList) {
                if (!myList.done) {
                    $scope.lists.push(myList);
                }
            });
        };
    }]);