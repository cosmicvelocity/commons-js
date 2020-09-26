/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * 文字列が無効な文字列か確認します。
 *
 * @param s 対象の文字列。
 * @returns 文字列が null, 0 バイト文字列なら true, それ以外は false 。
 */
export default function (s: any): boolean {
  return !s;
}
