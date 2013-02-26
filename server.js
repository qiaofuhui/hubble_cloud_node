var http = require("http");

var router = require("./router");
var request_handler = require("./request_handler");

var handle = {};
handle['/'] = request_handler.welcome;
handle['/add'] = request_handler.add;

function onRequest(request, response) {
	router.route(handle, request, response);
}

http.createServer(onRequest).listen(80);
console.log("Server has started.");

/*
 function start(route, handle) {
  function onRequest(request, response) {
    route(handle, request, response);
  }

  http.createServer(onRequest).listen(80);
  console.log("Server has started.");
}

exports.start = start; 
*/
