var jade = require('jade'),
	express = require('express'),
	app = express(),
    server = require('http').createServer(app),
	io = require('socket.io').listen(server);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.logger());
app.use(express.compress());
app.use(express.static(__dirname + '/public'));
	
app.get('/', function(req, res){
	res.render('index');
});

server.listen(process.env.PORT || 4561);
console.log('listening on' + process.env.PORT || 4561);

var cp = require('child_process').fork('ticker');
cp.on('message', function (message) {
    io.sockets.emit('update', message);
});

io.soc