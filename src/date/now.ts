/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import defaultFormatPattern from "./defaultFormatPattern";
import formatFunction from "./format";

/**
 * 現在日時を書式化して返します。
 *
 * @param format 書式化文字列。
 * @param locale 指定する場合、ロケール名。
 * @returns 現在日時を書式化した文字列。
 */
export default function(format: string = defaultFormatPattern, locale?: string): string {
    return formatFunction(new Date(), undefined, format, locale);
}
