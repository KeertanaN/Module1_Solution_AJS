(function(){
'use strict';

angular.module('LunchCheck',[])
       .controller('LunchCheckController',LunchCheckControllerfn);

LunchCheckControllerfn.$inject = ['$scope','$filter']
function LunchCheckControllerfn($scope,$filter){
  $scope.items = '';
  $scope.NoData = "Please enter data first";
  $scope.Enjoy = "Enjoy!";
  $scope.TooMuch = "Too Much!";
  $scope.CheckItems = function(){
    $scope.MessageReturned=0;
    var totalitems = getTotalNumberOfItems($scope.items);
    $scope.MessageReturned = totalitems;
  }
}

function getTotalNumberOfItems(string){
  if (string) {
    var words = string.split(',');
    return words.length;
    console.log(words.length);
  } else {
    return 0;
  }

};
})();
