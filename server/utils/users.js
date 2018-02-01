// [{
//     id: '',
//     name: '',
//     room: '',
// }]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)
// use ES6 classes

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     getUserDescription () {
//         return `${this.name} is ${this.age}`;
//     }
// }

// var me = new Person('k', 25);
// var d = me.getUserDescription();
// console.log(d);

const _ = require('lodash');

class Users {
    constructor () {
        this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        var user = this.getUser(id);
        if (user) _.pullAllWith(this.users, [{id}], _.isMatch);
        return user;
    }

    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    }

    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);
        return namesArray;
    }
}

module.exports = {Users};