var jade = require('jade'),
	express = require('express'),
	app = express(),
    server = require('http').createServer(app),
	io = require('socket.io').listen(server);

app.set('views', __dirname + '/views'