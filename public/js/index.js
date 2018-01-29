var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'rene@insomnyak.com',
        text: 'hey'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log(`newMessage: ${JSON.stringify(message, undefined,2)}`);
});