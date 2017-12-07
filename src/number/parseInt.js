/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

import isNaN from './isNaN';
import isNullOrEmpty from '../string/isNullOrEmpty';

/**
 * 文字列を数値に変換します。
 *
 * @param {string} value 対象の文字列。
 * @param {number|null} defaultValue 数値に変換できない場合などに用いられるデフォルト値。
 * @returns {number|null} 変換された数値。
 */
export default function (value, defaultValue) {
    if (!isNullOrEmpty(value)) {
        const n = parseInt(value);

        return !isNaN(n) ? n : defaultValue;
    } else {
        return defaultValue;
    }
};
