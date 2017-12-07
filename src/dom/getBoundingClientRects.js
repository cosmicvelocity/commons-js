/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

import getBoundingClientRect from "./getBoundingClientRect";

/**
 * 指定したセレクタの getBoundingClientRect を取得して返します。
 *
 * @param element 対象の要素。
 * @param selector 対象とする要素のセレクタ。
 * @returns {Array.<ClientRect>} 取得した領域の配列。
 */
export default function (element, selector) {
    const nodes = element.querySelectorAll(selector);
    const rects = [];

    for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];

        rects.push(getBoundingClientRect(node));
    }

    return rects;
}
