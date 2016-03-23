var app = angular.module('ngMadLibs', ['ngAnimate', 'ngMessages'])

app.constant('VERSION', "5")
app.run(function (VERSION, $rootScope) {
    $rootScope.version = VERSION;
})

app.controller('madLibsController', function ($scope) {

    $scope.data = {};

    //the gender values will populated here by the input values in the index.html
    $scope.gender = {};

    //by default do not hide the form
    $scope.hideForm = false;

    $scope.submit = function () {
        //hide the form only after submit
        $scope.hideForm = true;
    }

    $scope.reset = function () {
        $scope.data = {};
        $scope.hideForm = false;
        $scope.submitted = false;
    }

});
