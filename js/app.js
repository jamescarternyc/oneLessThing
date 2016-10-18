angular.module('keepUp',[])
.controller('keepUpCTRL', ['$scope', 'Count', function($scope,Count){
  $scope.search = {};
  $scope.count = Count.count;
}])
.factory('Count',function(){
  return {
    count: 'this is just a test'
  }
});
