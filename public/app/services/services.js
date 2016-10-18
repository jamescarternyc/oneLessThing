angular.module('myServices', [])

.factory('Songs', function ($http) {
  // Your code here
  var getAll = function(){
    return $http({
      method: 'GET',
      url: '/api/songs'
    }).then(function(res){
      console.log("Getting Songs" + res.data);

      return res.data;
    })
  };

  var oneLessThing = function(songs) {
    return $http({
      method: 'POST',
      url: '/api/songs',
      data: {'songs':songs}
    }).then(function(res){
      console.log(res);
      console.log('posted' + res.data);
      return res;
    });
  };

  return {
    getAll: getAll,
    oneLessThing: oneLessThing
  };

})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    // return $http({
    //   method: 'POST',
    //   url: '/api/users/signin',
    //   data: user
    // })
    // .then(function (resp) {
    //   return resp.data.token;
    // });
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function(res){
    if(firebase.auth().currentUser){
      console.log(firebase.auth().currentUser)
      $location.path('/dashboard');
    }
  });

  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    var user = firebase.auth().currentUser;
    console.log(user);
    return user;
  };

  var signout = function () {
    firebase.auth().signout();
    console.log('signed out');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
