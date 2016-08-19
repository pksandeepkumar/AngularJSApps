/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module('category',[]);



angular.module('myApp', ['ngRoute','category','item','items'

]).controller('myCtrl', function ($scope) {
    
    
    

}).config(function ($routeProvider) {
    $routeProvider
            .when("/item", {
                templateUrl: "items/view.html",
                controller: "itmeListCtrl"
            })

            .when("/itemDetails", {
                templateUrl: "item/view.html",
                controller: "itemDetailsCtrl"
            })

            .otherwise({
                templateUrl: "category/view.html",
                controller: "catControl"
            });
});


