
var app = angular.module('stockStatusModule', []);

app.controller('updateController', function ($scope, socket) {
    $scope.status = 'AngularJS successfully loaded.';