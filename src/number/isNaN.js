/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

/**
 * NaN かどうかを判定します。
 *
 * @param {number} value 対象の値。
 * @returns {boolean} NaN である場合 true, それ以外は false 。
 */
export default function (value) {
    /* eslint no-self-compare: "off" */
    return typeof value === 'number' && value !== value;
}
