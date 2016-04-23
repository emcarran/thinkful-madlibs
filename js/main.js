var app = angular.module('myApp', ['ngMessages'])

app.constant('VERSION', "6")
app.run(function (VERSION, $rootScope) {
    $rootScope.version = VERSION;
})

.controller("myCtrl", function ($scope) {
    $scope.data = {};

    $scope.gender = {};

    $scope.inputHide = false;

    $scope.submit = function () {
        $scope.inputHide = true;
    }
    $scope.reset = function () {
        $scope.inputHide = false;
        $scope.data = {};
    }
});
