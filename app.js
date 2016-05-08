var app = angular.module("app",["ngMessages","ngResource"]);

app.controller("mainCtrl", ["$scope", "$log", "$filter", "$timeout", function($scope, $log, $filter, $timeout) {
   
    $scope.name = "shady";
    $scope.filtername = $filter("uppercase")($scope.name);
    $log.log($scope.name);
    $log.log($scope.filtername);
    
    $timeout(function(){
          $scope.name = "Changed";
    }, 3000);
    
     $scope.handler = "";
     $scope.lowercasehandler = function() {
         return $filter("lowercase")($scope.handler);
     }
}]);

