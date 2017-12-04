import StringUtils from '../StringUtils';

describe('StringUtils#isEmpty', () => {

    test('is true', () => {
        expect(StringUtils.isEmpty('')).toBe(true);
    });

    test('is false', () => {
        expect(StringUtils.isEmpty('Hello !!')).toBe(false);
    });

});

describe('StringUtils#isNotEmpty', () => {

    test('is true', () => {
        expect(StringUtils.isNotEmpty('Hello !!')).toBe(true);
    });

    test('is false', () => {
        expect(StringUtils.isNotEmpty('')).toBe(false);
    });

});

describe('StringUtils#nl2br', () => {

    test('is LF', () => {
        expect(StringUtils.nl2br("Hello !!\nWorld !!")).toBe("Hello !!<br />World !!");
    });

    test('is LF (HTML)', () => {
        expect(StringUtils.nl2br("Hello !!\nWorld !!", null, {isXML: false})).toBe("Hello !!<br>World !!");
    });

    test('is CRLF', () => {
        expect(StringUtils.nl2br("Hello !!\r\nWorld !!")).toBe("Hello !!<br />World !!");
    });

    test('is CRLF (HTML)', () => {
        expect(StringUtils.nl2br("Hello !!\r\nWorld !!", null, {isXML: false})).toBe("Hello !!<br>World !!");
    });

});

describe('StringUtils#nl2br', () => {

    test('is LF', () => {
        expect(StringUtils.nl2brAndLink("Hello !!\nWorld !! http://example.com/"))
            .toBe("Hello !!<br />World !! <a href=\"http://example.com/\" target=\"_self\">http://example.com/</a>");
    });

    test('is CRLF', () => {
        expect(StringUtils.nl2brAndLink("Hello !!\r\nWorld !! http://example.com/"))
            .toBe("Hello !!<br />World !! <a href=\"http://example.com/\" target=\"_self\">http://example.com/</a>");
    });

});

describe('StringUtils#toLowerCase', () => {

    test('is toLowerCase', () => {
        expect(StringUtils.toLowerCase("Hello !!"))
            .toBe('hello !!');
    });

});

describe('StringUtils#toUpperCase', () => {

    test('is toUpperCase', () => {
        expect(StringUtils.toUpperCase("Hello !!"))
            .toBe('HELLO !!');
    });

});
