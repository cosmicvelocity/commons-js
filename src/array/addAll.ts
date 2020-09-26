/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * 指定された配列の要素をすべて追加します。
 *
 * @param array 対象の配列。
 * @param value 追加する要素を保持した配列。
 * @returns 要素が追加された配列。
 */
export default function <T>(array: T[], value: T[]): T[] {
  return array.concat(...value);
}
