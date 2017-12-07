/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

/**
 * 文字列を大文字にします。
 *
 * @param s 対象の文字列。
 * @param {string|null} defaultValue s が有効な文字列ではない場合 (null または '' など) のデフォルト値。
 * @returns {string} 大文字にされた文字列、またはデフォルト値。
 */
export default function (s, defaultValue = null) {
    if (s) {
        return s.toUpperCase();
    } else {
        return defaultValue;
    }
}
