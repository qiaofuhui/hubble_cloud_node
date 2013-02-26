var server = require("./server");
var router = require("./router");
var request_handler = require("./request_handler");

var handle = {};
handle['/'] = request_handler.welcome;
handle['/add'] = request_handler.add;

server.start(router.route, handle);
