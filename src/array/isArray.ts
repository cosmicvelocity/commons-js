/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * 与えられた引数が配列かどうかを取得します。
 *
 * @param value 確認対象の値。
 * @returns 配列である場合 true, それ以外は false 。
 */
export default function (value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Array]";
}
