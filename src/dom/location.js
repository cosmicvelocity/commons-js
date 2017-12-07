/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

/**
 * 要素の絶対位置を取得します。
 *
 * @param {*} element 対象の要素。
 * @returns {{x: number, y: number}} 要素の絶対位置。
 */
export default function (element) {
    const rect = element.getBoundingClientRect();
    const view = element.ownerDocument.defaultView;

    return {
        x: rect.left + view.pageXOffset,
        y: rect.top + view.pageYOffset
    };
}
