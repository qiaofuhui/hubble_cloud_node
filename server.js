var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    route(handle, request, response);
  }

  http.createServer(onRequest).listen(80);
  console.log("Server has started.");
}

exports.start = start;
