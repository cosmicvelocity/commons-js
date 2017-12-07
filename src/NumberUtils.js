/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import format from './number/format';
import isNaN from './number/isNaN';
import parseInt from './number/parseInt';

/**
 * 数値に関連するコンビニエンスメソッドを提供します。
 */
export default {
    format: format,
    isNaN: isNaN,
    parseInt: parseInt
};
