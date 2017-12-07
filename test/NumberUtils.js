"use strict";

import NumberUtils from '../src/NumberUtils';

describe('NumberUtils#format', () => {

    it('format', () => {
        expect(NumberUtils.format(1000)).toBe('1,000');
        expect(NumberUtils.format(null)).toBe('');
        expect(NumberUtils.format('')).toBe('');
        expect(NumberUtils.format('Hello !!')).toBe('');
    });

});

describe('NumberUtils#isNaN', () => {

    it('isNaN', () => {
        expect(NumberUtils.isNaN(NaN)).toBe(true);
        expect(NumberUtils.isNaN(1000)).toBe(false);
        expect(NumberUtils.isNaN(null)).toBe(false);
        expect(NumberUtils.isNaN('')).toBe(false);
        expect(NumberUtils.isNaN('Hello !!')).toBe(false);
    });

});

describe('NumberUtils#parseInt', () => {

    it('parseInt', () => {
        expect(NumberUtils.parseInt(1000)).toBe(1000);
        expect(NumberUtils.parseInt(null, 0)).toBe(0);
        expect(NumberUtils.parseInt('', 0)).toBe(0);
        expect(NumberUtils.parseInt('Hello !!', 0)).toBe(0);
    });

});
