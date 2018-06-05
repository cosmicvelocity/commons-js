/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

/**
 * 指定された範囲の値を持つ配列を返します。
 *
 * @param {number} start 開始する値。
 * @param {number} end 終了する値。
 * @returns {number[]} 省略した場合、0 から start の値となる。
 */
export default function (start, end = undefined) {
    const out = [];

    if (end === undefined) {
        end = start;
        start = 0;
    }

    for (let i = start; i < end; i++) {
        out.push(i);
    }

    return out;
};
