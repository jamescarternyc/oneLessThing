var express = require ('express');
var app = express();
var spotifyWebApi = require('spotify-web-api-node');
var port = '3000'

// app.use(express.static(__dirname + '/public'));

var getRequests = function(req, res, next){
  console.log(req.url, req.method);
  next();
}

var spotify = new spotifyWebApi({
  clientId: '20cd32ee141c4d5db0ef05372253bc0a',
  clientSecret: '4dcc9b56a7174d0ca10a7de63dc3b765',
  redirectUri: '/callback'
});

//spotify.setAccessToken('')
//
// app.get('/api/spotify',function(){
// })
app.use(getRequests);
app.use(express.static('public'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

// console.log(__dirname);

app.listen(port);
console.log('now listening on port: ' + port );
