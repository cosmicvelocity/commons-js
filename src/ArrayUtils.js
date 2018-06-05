/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import addAll from './array/addAll';
import isArray from './array/isArray';
import max from './array/max';
import min from './array/min';
import moveAt from './array/moveAt';
import of from './array/of';
import range from './array/range';
import swap from './array/swap';

/**
 * 配列に関するコンビニエンスメソッドを提供します。
 */
export default {
    addAll: addAll,
    isArray: isArray,
    max: max,
    min: min,
    moveAt: moveAt,
    of: of,
    range: range,
    swap: swap
};
