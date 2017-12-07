/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import attr from './dom/attr';
import attrAsNumber from './dom/attrAsNumber';
import expansionRects from './dom/expansionRects';
import getBoundingClientRect from './dom/getBoundingClientRect';
import getBoundingClientRects from './dom/getBoundingClientRects';
import location from './dom/location';
import scrollTop from './dom/scrollTop';
import text from './dom/text';

/**
 * DOM に関するコンビニエンスメソッドを提供します。
 */
export default {
    attr: attr,
    attrAsNumber: attrAsNumber,
    expansionRects: expansionRects,
    getBoundingClientRect: getBoundingClientRect,
    getBoundingClientRects: getBoundingClientRects,
    location: location,
    scrollTop: scrollTop,
    text: text
};
