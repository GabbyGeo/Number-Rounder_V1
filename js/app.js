var app = angular.module("Demo", []);
app.controller("AppController", function ($scope) {
  $scope.syntexError = false;

  $scope.Calculate = function () {
    var result = $scope.result;
    var result1 = math.round($scope.number1 / $scope.rounder);
    try {
      $scope.result = math.eval(result1 * $scope.rounder);
    } catch (e) {
      if (e.message.indexOf("Undefined symbol") != -1) {
        $scope.syntexError = true;
      }
      return result;
    }
  }
  $scope.reset = function () {
    $scope.result = null;
    $scope.number1 = null;
    $scope.rounder = null;
  }
});


