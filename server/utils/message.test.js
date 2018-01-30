const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        /* from, lat, long
        assert from, createdAt is number, 
        URL is what is expected
        */
        var from = 'rk';
        var lat = 32.323423;
        var lng = 24.23049;

        var message = generateLocationMessage(from, lat, lng);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe(from);
        expect(message.url).toBe(`https://www.google.com/maps?q=${lat},${lng}`);
    });
});