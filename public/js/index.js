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

    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    });
});