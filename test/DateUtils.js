"use strict";

import DateUtils from "../src/DateUtils";

describe('DateUtils#format', () => {

    it('format', () => {
        expect(DateUtils.format('2017-01-01 12:10:11', null, 'YYYY-MM-DD HH:mm:ss')).toBe('2017-01-01 12:10:11');
    });

});

describe('DateUtils#now', () => {

    it('now', () => {
        expect(DateUtils.now()).not.toBeNull();
    });

});
