/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

import defaultFormatPattern from './defaultFormatPattern';
import formatFunction from './format';

/**
 * 現在日時を書式化して返します。
 *
 * @param {string} format 書式化文字列。
 * @param {string|null} locale 指定する場合、ロケール名。
 * @returns {string} 現在日時を書式化した文字列。
 */
export default function (format = defaultFormatPattern, locale = null) {
    return formatFunction(new Date(), null, format, locale);
}
