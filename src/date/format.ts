/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import moment from "moment/moment";
import isNullOrEmpty from "../string/isNullOrEmpty";
import defaultFormatPattern from "./defaultFormatPattern";

/**
 * 日付を表す文字列を初期化して返します。
 *
 * @param value 日付を表す文字列、またはオブジェクト。
 * @param defaultValue デフォルト値。
 * @param format 書式化するパターン。
 * @param locale 指定する場合、ロケール名。
 * @return 書式化された文字列。
 */
export default function (
  value: string | Date,
  defaultValue?: string,
  format: string = defaultFormatPattern,
  locale?: string
): string {
  let date;

  if (!isNullOrEmpty(value) && (date = moment(value)).isValid()) {
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
    return defaultValue || "";
  }
}
