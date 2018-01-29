var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
    
    // var rand = Math.floor(Math.random() * 100000);
    // socket.emit('userJoined', {
    //     name: rand
    // });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log(`newMessage: ${JSON.stringify(message, undefined,2)}`);
});
