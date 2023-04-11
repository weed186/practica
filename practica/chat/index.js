// Подключение всех модулей к программе
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

// Отслеживание порта
server.listen(3000);

// Отслеживание url адреса и отображение нужной HTML страницы
app.get('/', function(request, respons) {
	respons.sendFile(__dirname + '/index.html');
});

//массив хранящий всех пользователей
users = [];
//массив хранящий все подключения
connections = [];
//используем библиотеку socket.io
io.sockets.on('connection', function(socket){
	console.log("Успешное соединение");
	connections.push(socket);

	socket.on('disconnect', function(data){
		connections.splice(connections.indexOf(socket), 1);//находится один элемент в сокет и он удаляется
		console.log("Отключились");
	});

	socket.on('sendMess', function(data) {
		io.sockets.emit('addMess', {mess: data.mess, name: data.name});//после выполнения функции, передается значение в новое сообщение
	});

});