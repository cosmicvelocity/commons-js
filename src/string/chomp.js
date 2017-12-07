/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

import isEmpty from "./isEmpty";

/**
 * 行末の改行コードを除去します。
 *
 * @param {string} s 対象の文字列。
 * @returns {string} 行末の改行が除去された文字列。
 */
export default function (s) {
    if (isEmpty(s)) {
        return s;
    }

    let lastIndex = s.length - 1;

    if (s[lastIndex] === "\n") {
        if (s[lastIndex - 1] === "\r") {
            lastIndex--;
        }
    } else if (s[lastIndex] !== "\r") {
        lastIndex++;
    }

    if (s.length === lastIndex) {
        return s;
    }

    return s.substr(0, lastIndex);
}
