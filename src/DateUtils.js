/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import defaultFormatPattern from './date/defaultFormatPattern';
import format from './date/format';
import japaneseEra from './date/japaneseEra';
import now from './date/now';

/**
 * 日時に関するコンビニエンスメソッドを提供します。
 */
export default {

    /**
     * デフォルトの書式を表します。
     *
     * @type {string}
     */
    DEFAULT_FORMAT_PATTERN: defaultFormatPattern,

    /**
     * 和暦のリストを表します。
     *
     * @type {[]}
     */
    JAPANESE_ERA: japaneseEra,

    /**
     * 日付を表す文字列を初期化して返します。
     *
     * @param {string|Date} value 日付を表す文字列、またはオブジェクト。
     * @param {string|null} defaultValue デフォルト値。
     * @param {string} format 書式化するパターン。
     * @param {string|null} locale 指定する場合、ロケール名。
     * @return {string|null} 書式化された文字列。
     */
    format: format,

    /**
     * 現在日時を書式化して返します。
     *
     * @param {string} format 書式化文字列。
     * @param {string|null} locale 指定する場合、ロケール名。
     * @returns {string} 現在日時を書式化した文字列。
     */
    now: now

};
