"use strict";

import StringUtils from '../src/StringUtils';

describe('StringUtils#chomp', () => {

    it('is LF', () => {
        expect(StringUtils.chomp('ABC\n')).toBe('ABC');
    });

    it('is CRLF', () => {
        expect(StringUtils.chomp('ABC\r\n')).toBe('ABC');
    });

    it('not CRLF', () => {
        expect(StringUtils.chomp('ABC')).toBe('ABC');
    });

    it('is LF only', () => {
        expect(StringUtils.chomp('\n')).toBe('');
    });

    it('is 0 length', () => {
        expect(StringUtils.chomp('')).toBe('');
    });

});

describe('StringUtils#isEmpty', () => {

    it('is true', () => {
        expect(StringUtils.isEmpty('')).toBe(true);
    });

    it('is false', () => {
        expect(StringUtils.isEmpty('Hello !!')).toBe(false);
    });

});

describe('StringUtils#isNotEmpty', () => {

    it('is true', () => {
        expect(StringUtils.isNotEmpty('Hello !!')).toBe(true);
    });

    it('is false', () => {
        expect(StringUtils.isNotEmpty('')).toBe(false);
    });

});

describe('StringUtils#nl2br', () => {

    it('is LF', () => {
        expect(StringUtils.nl2br("Hello !!\nWorld !!")).toBe("Hello !!<br />World !!");
    });

    it('is LF (HTML)', () => {
        expect(StringUtils.nl2br("Hello !!\nWorld !!", null, {isXML: false})).toBe("Hello !!<br>World !!");
    });

    it('is CRLF', () => {
        expect(StringUtils.nl2br("Hello !!\r\nWorld !!")).toBe("Hello !!<br />World !!");
    });

    it('is CRLF (HTML)', () => {
        expect(StringUtils.nl2br("Hello !!\r\nWorld !!", null, {isXML: false})).toBe("Hello !!<br>World !!");
    });

});

describe('StringUtils#url2anchor', () => {

    it('is URL', () => {
        expect(StringUtils.url2anchor("Hello !!\nWorld !! http://example.com/"))
            .toBe("Hello !!\nWorld !! <a href=\"http://example.com/\" target=\"_self\">http://example.com/</a>");
    });

});

describe('StringUtils#convertHtml', () => {

    it('is LF', () => {
        expect(StringUtils.convertHtml("Hello !!\nWorld !! http://example.com/"))
            .toBe("Hello !!<br />World !! <a href=\"http://example.com/\" target=\"_self\">http://example.com/</a>");
    });

    it('is CRLF', () => {
        expect(StringUtils.convertHtml("Hello !!\r\nWorld !! http://example.com/"))
            .toBe("Hello !!<br />World !! <a href=\"http://example.com/\" target=\"_self\">http://example.com/</a>");
    });

});

describe('StringUtils#toLowerCase', () => {

    it('is toLowerCase', () => {
        expect(StringUtils.toLowerCase("Hello !!")).toBe('hello !!');
    });

});

describe('StringUtils#toUpperCase', () => {

    it('is toUpperCase', () => {
        expect(StringUtils.toUpperCase("Hello !!")).toBe('HELLO !!');
    });

});
