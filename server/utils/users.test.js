const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }]
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'k',
            room: 'theOffice'
        }

        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var id = '1';
        var resUsers = users.removeUser(id);
        expect(users.users.length).toBe(2);
        expect(users.users.filter((user) => user.id === id)).toEqual([]);
        expect(resUsers.id).toBe(id);
    });

    it('should not remove user', () => {
        var id = '4';
        var resUsers = users.removeUser(id);
        expect(users.users.length).toBe(3);
        expect(users.users.filter((user) => user.id === id)).toEqual([]);
        expect(resUsers).toBeFalsy();
    });

    it('should find user', () => {
        var id = '1';
        var user = users.getUser(id);
        expect(user.id).toBe(id);
    });

    it('should not find user', () => {
        var id = '4';
        var user = users.getUser(id);
        expect(user).toBeFalsy();
    });

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
});