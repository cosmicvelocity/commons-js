/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import max from '../array/max';
import min from '../array/min';

const emptyRect = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
};

/**
 * 指定された領域の配列を拡張し、一つの領域にします。
 *
 * @param {Array.<ClientRect>} arr 領域の配列。
 * @param {number} offsetX 横のオフセット値。
 * @param {number} offsetY 高さのオフセット値。
 * @param {number} marginX 横の拡張分。
 * @param {number} marginY 縦の拡張分。
 * @returns {{
 *      left: number,
 *      top: number,
 *      right: number,
 *      bottom: number,
 *      width: number,
 *      height: number
 * }} 領域を表すオブジェクト。
 */
export default function (arr, offsetX = 0, offsetY = 0, marginX = 0, marginY = 0) {
    if (!Array.isArray(arr)) {
        return emptyRect;
    }

    const left = min(arr, (x, y) => x.left - y.left).left + offsetX;
    const top = min(arr, (x, y) => x.top - y.top).top + offsetY;
    const right = max(arr, (x, y) => x.right - y.right).right + offsetX + marginX;
    const bottom = max(arr, (x, y) => x.bottom - y.bottom).bottom + offsetY + marginY;
    const width = right - left;
    const height = bottom - top;

    return {
        left: left,
        top: top,
        right: right,
        bottom: bottom,
        width: width,
        height: height
    };
};
