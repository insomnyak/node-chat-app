const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'test@example.com';
        var text = 'hello';
        var message = generateMessage(from, text);

        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        // prior two statements same as next one
        expect(message).toMatchObject({from, text});
        expect(typeof message.createdAt).toBe('number');
    });

});