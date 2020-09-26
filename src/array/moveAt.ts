/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * 指定された要素を移動します。
 *
 * @param array 対象の配列。
 * @param from 移動元の要素を表すインデックス。
 * @param to 移動先を表すインデックス。
 * @returns 要素の移動を行った配列。
 */
export default function (array: any[], from: number, to: number): any[] {
  if (from === to || from > array.length - 1 || to > array.length - 1) {
    return array;
  }

  const value = array[from];
  const tail = array.slice(from + 1);

  array.splice(from);

  Array.prototype.push.apply(array, tail);

  array.splice(to, 0, value);

  return array;
}
