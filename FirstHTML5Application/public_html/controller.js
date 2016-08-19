/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module('category', []);



angular.module('myApp', [
    'ngRoute',
    'category',
    'item',
    'items'

]).controller('myCtrl', function ($scope, $http) {

//    $http.get('http://rest-service.guides.spring.io/greeting').
//        success(function(data) {
//            $scope.greeting = data;
//            alert("Response:" + data);
//        });
//    
//     $http.get('http://192.168.10.14:8089//eDinette.asmx/SetFeedback?Questionid=a46f4438-cfd7-428b-aee4-c1cef3b65576~0d41671e-0d5a-4a9a-9acc-0a236822939ea46f4438-cfd7-428b-aee4-c1cef3b65576~0d41671e-0d5a-4a9a-9acc-0a236822939e&FirstName=&LastName=&Email=&Mobile=&Feedback=&WaiterName=&SurveyId=20').
//        success(function(data) {
//            $scope.greeting = data;
//            alert("Response 2:" + data);
//        }
//                
//                
//        );


    $scope.callWebService = function () {
//    $http.get('http://192.168.10.14:8089/eDinette.asmx/Ping').
//        success(function(data) {
//            $scope.greeting = data;
//            alert("Response:" + data);
//        });


        // Simple GET request example:
        $http({
            method: 'jsonp',
            url :'http://192.168.10.14:8089/eDinette.asmx/Ping'
            }).then(function successCallback(response) {
            alert("Response:" + response);
        }, function errorCallback(response) {
            alert("Error");
        });
    }



    $scope.loadDoc = function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                alert('Response:' + xhttp.responseText);
//            document.getElementById("demo").innerHTML = xhttp.responseText;
            } else {
                alert('Somthing went wrong');
            }
        };
        xhttp.open("GET", "http://rest-service.guides.spring.io/greeting", true);
        xhttp.send();
    }


    $scope.soap = function () {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'http://192.168.10.14:8089/eDinette.asmx', true);

//            // build SOAP request
//            var sr =
//                '<?xml version="1.0" encoding="utf-8"?>' +
//                '<soapenv:Envelope ' + 
//                    'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
//                    'xmlns:api="http://127.0.0.1/Integrics/Enswitch/API" ' +
//                    'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
//                    'xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">' +
//                    '<soapenv:Body>' +
//                        '<api:some_api_call soapenv:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">' +
//                            '<username xsi:type="xsd:string">login_username</username>' +
//                            '<password xsi:type="xsd:string">password</password>' +
//                        '</api:some_api_call>' +
//                    '</soapenv:Body>' +
//                '</soapenv:Envelope>';

        var sr = '<?xml version="1.0" encoding="utf-8"?>' +
                '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ' +
                'xmlns:xsd="http://www.w3.org/2001/XMLSchema" ' +
                'xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
                '<soap:Body>' +
                '<Ping xmlns="http://tempuri.org/" />' +
                '</soap:Body>' +
                '</soap:Envelope>';

        xmlhttp.onreadystatechange = function () {

            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    alert('done. use firebug/console to see network response');
                }
                alert('Status:' + xmlhttp.status);
            }
        }
        // Send the POST request
        xmlhttp.setRequestHeader('Content-Type', 'text/xml');
        xmlhttp.send(sr);
        // send request
        // ...
    }


    function soap() {

    }



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


