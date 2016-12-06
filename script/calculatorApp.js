var module = angular.module("myCalculatorModule",[]);
module.controller("myCalculatorCtrl",Main);
function Main($scope){
  $scope.hourOfday=19;
  $scope.datetime = (new Date()).toTimeString();
  console.log("The main function is called!");
  console.log($scope.datetime);
  $scope.add= function(){
    $scope.showSign="+";
    console.log("The addition is called!");
    console.log($scope.showSign);
    }
  $scope.minus=function(){
    $scope.showSign="-";
    console.log("The minus is called!");
    console.log($scope.showSign);
    }
    $scope.divide=function(){
      $scope.showSign="/";
      console.log("The divide is called!");
      console.log($scope.showSign);
    }
    $scope.multiply=function(){
      $scope.showSign="*";
      console.log("The multiply is called!");
      console.log($scope.showSign);
    }
    $scope.clearError=function(){
        $scope.error="";
    }
  $scope.calculate= function(){
    var ip1 = Number($scope.input1);
    var ip2 = Number($scope.input2);
    if (isNaN(ip1) || isNaN(ip2) ) {
       $scope.error="Error in input, it must be number !";
       $scope.input1="";
       $scope.input2="";
       console.log("Error in Input!");
       return;
     }
    switch ($scope.showSign) {
      case "+":
          console.log("We are doing a additon");
          $scope.result = ip1+ip2;
          console.log($scope.result);
        break;
      case "-":
          console.log("We are doing a minus");
          $scope.result = ip1-ip2;
          console.log($scope.result);
        break;
      case "/":
          console.log("We are doing a division");
          $scope.result = ip1/ip2;
          console.log($scope.result);
        break;
      case "*":
          console.log("We are doing a multiplication");
          $scope.result = ip1*ip2;
          console.log($scope.result);
        break;
      default:
        console.log("Sorry, we are out of " + expr + ".");
    }

  }
}
