/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

/**
 * offsetTop を取得します。
 *
 * @returns {number} 取得された offsetTop の値。
 */
export default function () {
    return document.defaultView.pageYOffset;
}
