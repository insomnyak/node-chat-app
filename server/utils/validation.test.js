const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var str1 = 123943;
        var str2 = [123, 1234, '123'];
        var str3 = {a:'2',b:'3'};
        var str4;
        expect(isRealString(str1)).toBe(false);
        expect(isRealString(str2)).toBe(false);
        expect(isRealString(str3)).toBe(false);
        expect(isRealString(str4)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var str = '         ';
        var accept = isRealString(str);
        expect(accept).toBe(false);
    });

    it('should allow string w/ non-space characters', () => {
        var str = '  qwei a;lsdfj       ';
        var accept = isRealString(str);
        expect(accept).toBe(true);
    });
});