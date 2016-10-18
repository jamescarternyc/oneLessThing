var app = angular.module('keepUp',[
  'myServices',
  'keep.auth',
  'keepUp.dashboard',
  'ngRoute']);

app.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      // $locationProvider.hashPrefix('!');
      console.log('reached');
      $routeProvider
        .when('/signin', {
          templateUrl: 'app/auth/signin.html',
          controller: 'AuthController'
        })

        .when('/signup', {
          templateUrl: 'app/auth/signup.html',
          controller: 'AuthController'
        })

        .otherwise({
          templateUrl:'app/dashboard/dashboard.html',
          controller: 'dashboardController'
        })

  }]);
app.factory('Count',function(){
  return {
    count: 'this is just a test'
  }
})

app.controller('keepUpCTRL', ['$scope', 'Count', function($scope,Count){
  $scope.search = {};
  $scope.count = Count.count;
}]);



app.run(function ($rootScope, $location, Auth) {
  // here inside the run phase of angular, our services and controllers
  // have just been registered and our app is ready
  // however, we want to make sure the user is authorized
  // we listen for when angular is trying to change routes
  // when it does change routes, we then look for the token in localstorage
  // and send that token to the server to see if it is a real user or hasn't expired
  // if it's not valid, we then redirect back to signin/signup
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    console.log('running');
    // Auth.signout();
    if (firebase.auth().currentUser === null) {
      console.log(firebase.auth().currentUser);
      console.log("fight the power");
      $location.path('/signin');
    }
  });

});



// (OneLessThing)...

//login view
  // input for username & password


// connect a spotify account... should store users token for easy access next time
  //after connection, display search bar

//input should be model for search query & selection box below it (OneLessThing)
  // once correct artist found and selected
  //add selected artist to artistToAdd model

// Once user clicks something along the lines of 'start',
  //service should be added that begins looking for songs by each Artist in List that were recently added to spotify.

  //App should keep track of songs already added, and compare those songs with the ones that were found before adding on to playlist.

  // new found songs should be held in an array, then added to playlist, then destroyed.

  // User should determine how frequently they would like new music added to their playlists
    // every  5 minutes, hour, day, week

//app should now know which songs to look for and automatically add to playlist



//clicking a dislike button should remove a song from user's playlist
