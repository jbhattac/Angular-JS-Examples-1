var module = angular.module("myModule",[]);
module.controller("myAngularCtrl",Main);
function Main($scope){
  $scope.hourOfday=19;
  $scope.datetime = (new Date()).toTimeString();
  console.log("The main function is called!");
  console.log($scope.datetime);
  $scope.updatetime= function(){
    $scope.datetime = (new Date()).toTimeString();
    console.log("The updatetime function is called!");
    console.log($scope.datetime);
  }
}
