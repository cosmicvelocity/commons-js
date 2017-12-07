/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

/**
 * テキストを取得します。
 *
 * @param {*} element 対象の DOM 。
 * @param {string} selector テキストを取得する対象のセレクタ。
 * @param {string|null} defaultValue 取得できなかった場合のデフォルト値。
 * @returns {string|null} セレクタに該当するノードのテキスト、もしくはデフォルト値。
 */
export default function (element, selector, defaultValue = null) {
    const node = element.querySelector(selector);

    if (node !== null) {
        return node.textContent;
    } else {
        return defaultValue;
    }
};
