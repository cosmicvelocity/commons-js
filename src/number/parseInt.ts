/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isNullOrEmpty from "../string/isNullOrEmpty";
import isNaN from "./isNaN";

/**
 * 文字列を数値に変換します。
 *
 * @param value 対象の文字列。
 * @param defaultValue 数値に変換できない場合などに用いられるデフォルト値。
 * @returns 変換された数値。
 */
export default function (value: any, defaultValue = 0): number {
  if (!isNullOrEmpty(value)) {
    const n = parseInt(value, 10);

    return !isNaN(n) ? n : defaultValue;
  } else {
    return defaultValue;
  }
}
