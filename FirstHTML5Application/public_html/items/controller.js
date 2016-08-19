/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
angular.module('items', []).controller('itmeListCtrl', function($scope, $location, $rootScope) {
//     alert("In ctrl");
     
    $scope.items = [
                    {name: 'Egg as You Like',
                        image: 'http://192.168.10.14:8089//img/11720476-f647-447c-8f52-fa32a2841d8c.jpg',
                        description: 'Two eggs (scrambled, fried or omelet), served with mixed fresh vegetables and bread',
                        rate: '30'},
                    {name: 'Shamy Breakfast',
                        image: 'http://192.168.10.14:8089//img/3f2ea344-d437-4bdf-a518-9746f0a0d6c1.jpg',
                        description: 'Ful mudammas, akkawi cheese, labneh, olives, fresh vegetables and Arabic bread, served with tea or coffee',
                        rate: '40'},
                    {name: 'French Breakfast',
                        image: 'http://192.168.10.14:8089//img/6dfeb68b-ffaf-4fae-9914-e53601243226.jpg',
                        description: 'Giant croissant stuffed with scramble eggs, served with smoked salmon, labneh, grilled tomatoes, and fresh juice or sliced fruits',
                        rate: '45'},
                    {name: 'American Breakfast',
                        image: 'http://192.168.10.14:8089//img/a5db742e-4ba7-4cda-a15d-59bc9489fe38.jpg',
                        description: 'Two sunny-side-up eggs, sausage, beef bacon, hash browns, baked beans and your choice of fresh juice: orange, watermelon or lemon with mint',
                        rate: '45'},
                    {name: 'Continental Breakfast',
                        image: 'http://192.168.10.14:8089//img/59c382f1-5a31-4a8d-a33d-6af9d79da4e2.jpg',
                        description: 'Assorted croissants, toast bread, butter and jam, served with tea or coffee',
                        rate: '43'},
                    {name: 'Slimmer Breakfast',
                        image: 'http://192.168.10.14:8089//img/17ac754a-985d-4409-9511-257242facb17.jpg',
                        description: 'Poached eggs on sliced olive loaf bread, served with turkey ham and green leaves',
                        rate: '30'},
                    {name: 'Akkawi Cheese Sandwich',
                        image: 'http://192.168.10.14:8089//img/0a52abae-a85f-4598-98ae-81138f0d409b.jpg',
                        description: 'Grilled akkawi cheese in Arabic bread with lettuce, tomato and zaatar sprinkling', 
                        rate: '30'},
                    {name: 'Falafel Sandwich',
                        image: 'http://192.168.10.14:8089//img/b105ac12-4e77-4d4f-8ade-bf2d7f2451f7.jpg',
                        description: 'Fried crispy mashed chickpeas and vegetables, served in our homemade mini pita bread with Rocca salad and tahini sauce',
                        rate: '30'}

                ];
                
                 $scope.goDetail = function (path, item, itemDetail, itemRate, itemImage) {
        console.log(path);
        $rootScope.itemDetailName = item;
        $location.path(path);
        $rootScope.itemDetailName = item;
        $rootScope.itemDetailImage = itemImage;
        $rootScope.itemDetailDescription = itemDetail;
        $rootScope.itemDetailRate = itemRate;
    };
});  


