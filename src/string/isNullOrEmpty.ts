/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * 文字列が null または 0 バイト文字列か取得します。
 *
 * @param s 対象の文字列。
 * @returns 文字列が null または長さ 0 の文字列だった場合 true, それ以外は false 。
 */
export default function(s: any): boolean {
    return s === null || (Object.prototype.toString.call(s) === "[object String]" && s.length === 0);
}
