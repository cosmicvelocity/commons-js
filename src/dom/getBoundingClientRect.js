/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

/**
 * 要素から getBoundingClientRect を取得します。
 *
 * @param {*} element 対象の要素。
 * @returns {ClientRect|null} 対象の領域。
 */
export default function (element) {
    if (element.getBoundingClientRect) {
        return element.getBoundingClientRect();
    } else {
        return null;
    }
}
