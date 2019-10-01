/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import max from "../array/max";
import min from "../array/min";

interface IRect {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
}

const emptyRect: IRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};

/**
 * 指定された領域の配列を拡張し、一つの領域にします。
 *
 * @param arr 領域の配列。
 * @param offsetX 横のオフセット値。
 * @param offsetY 高さのオフセット値。
 * @param marginX 横の拡張分。
 * @param marginY 縦の拡張分。
 * @returns 領域を表すオブジェクト。
 */
export default function(
    arr: ClientRect[],
    offsetX: number = 0,
    offsetY: number = 0,
    marginX: number = 0,
    marginY: number = 0): IRect {

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
        bottom,
        height,
        left,
        right,
        top,
        width,
    };
}
