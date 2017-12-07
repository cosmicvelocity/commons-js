/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import addAll from './array/addAll';
import isArray from './array/isArray';
import of from './array/of';
import swap from './array/swap';

/**
 * 配列に関するコンビニエンスメソッドを提供します。
 */
export default {
    addAll: addAll,
    isArray: isArray,
    of: of,
    swap: swap
};
