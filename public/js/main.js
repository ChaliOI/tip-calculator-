
var app = angular.module('stockStatusModule', []);

app.controller('updateController', function ($scope, socket) {
    $scope.status = 'AngularJS successfully loaded.';
    $scope.stocks = [
        { name: "Apple", price: 4.50 },
        { name: "Microsoft", price: 4.00 },
        { name: "Facebook", price: 3.75 }
    ];

    $scope.start = function () {
        socket.emit('start');
    };

    $scope.stop = function () {