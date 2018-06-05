/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

/**
 * 可変長引数から配列を生成します。
 *
 * @returns {Array} 初期化された配列。
 */
export default function () {
    return Array.prototype.slice.call(arguments);
}
