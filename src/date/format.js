/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

import moment from 'moment/moment';
import defaultFormatPattern from './defaultFormatPattern';

/**
 * 日付を表す文字列を初期化して返します。
 *
 * @param {string|Date} value 日付を表す文字列、またはオブジェクト。
 * @param {string|null} defaultValue デフォルト値。
 * @param {string} format 書式化するパターン。
 * @param {string|null} locale 指定する場合、ロケール名。
 * @return {string|null} 書式化された文字列。
 */
export default function (value, defaultValue = null, format = defaultFormatPattern, locale = null) {
    const date = moment(value);

    if (date.isValid()) {
        const oldLocale = moment.locale();

        if (locale !== null) {
            moment.locale(locale);
        }

        const dateString = date.format(format);

        if (locale !== null) {
            moment.locale(oldLocale);
        }

        return dateString;
    } else {
        return defaultValue;
    }
}
