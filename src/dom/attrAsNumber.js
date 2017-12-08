/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

import attr from "./attr";

/**
 * 属性値を取得します。
 *
 * @param node 対象のノード。
 * @param name 属性名。
 * @param defaultValue 属性がなかった場合のデフォルト値。
 * @returns {*} 属性の値、もしくはデフォルト値。
 */
export default function (node, name, defaultValue = 0) {
    const value = attr(node, name);

    if (value) {
        return parseInt(value);
    } else {
        return defaultValue;
    }
}