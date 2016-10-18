// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('keep.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.dashboard ={};
  $scope.signout = Auth.signout;
  $scope.signin = function () {
    console.log($scope.user);
    Auth.signin($scope.dashboard).then(function(res){
      $location.path('/dashboard');
    });
    // $scope.user = firebase.auth().currentUser;
      // .then(function () {
      //   // $window.localStorage.setItem('com.shortly', token);
        // $location.path('/dashboard');
      // })
      // .catch(function (error) {
      //   console.error(error);
      // });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.shortly', token);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
