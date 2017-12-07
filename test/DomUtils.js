"use strict";

import DomUtils from "../src/DomUtils";
import location from "../src/dom/location";

describe('DomUtils#attr', () => {

    it('body', () => {
        document.body.innerHTML =
            '<div>' +
            ' <span id="sample1" />' +
            ' <button id="sample2" />' +
            '</div>';

        expect(DomUtils.attr(document.getElementById('sample1'), 'id')).toEqual('sample1');
    });

});

describe('DomUtils#location', () => {

    it('body', () => {
        document.body.innerHTML =
            '<div>' +
            ' <span id="sample1" />' +
            ' <button id="sample2" />' +
            '</div>';

        expect(DomUtils.location(document.getElementById('sample1'))).toEqual({x: 0, y: 0});
    });

});
