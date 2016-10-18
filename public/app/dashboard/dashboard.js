angular.module('keepUp.dashboard', [])

.controller('dashboardController', function ($scope, Songs, Auth) {


  if ( firebase.auth().currentUser) {
    $scope.user = firebase.auth().currentUser;
    $scope.artists = [];
    $scope.addArtists = function() {
      console.log("one less thing")
      Songs.oneLessThing($scope.artists);
    }

    // setInterval(function(){
    //    $scope.links = Links.getAll().then(function (res) {
    //   console.log(res);
    //   $scope.data.links = res;
    // });
    // },200)

  } else {
    $scope.signout = Auth.signout;
  }
});


//visits: Number,
  // link: String,
  // title: String,
  // code: String,
  // baseUrl: String,
  // url: String
