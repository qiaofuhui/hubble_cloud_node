var url = require("url");
var querystring = require("querystring");
var exec = require("child_process").exec;

function welcome(request, response) {
  
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }
  
  //sleep(10000);
  /*
  exec("ls -lah", 
      {timeout:10000, maxBuffer: 20000*1024 },
      function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
      }
      );
      */
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write( "Welcome to the world of Node.js.");
  response.end();
  }

function add(request, response) {
  var values = querystring.parse(url.parse(request.url).query);

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write((Number(values.a) + Number(values.b)).toString());
  response.end();
}

exports.welcome = welcome;
exports.add = add;

