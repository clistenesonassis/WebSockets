//import socketIOClient from 'socket.io-client';
const socketIOClient = require('socket.io-client');

window.socket = socketIOClient("http://192.168.0.7:3500");
