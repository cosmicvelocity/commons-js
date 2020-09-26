/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const compare = (x: any, y: any): number => x - y;

/**
 * 配列で最も大きな値を取得します。
 *
 * @param arr 対象の配列。
 * @param comp 値を比較する関数。
 * @returns 配列中の最大値、要素がない配列の場合 undefined 。
 */
export default function (arr: any[], comp = compare): any | undefined {
  let result: any;

  if (Array.isArray(arr)) {
    for (const current of arr) {
      if (result === undefined || comp(current, result) > 0) {
        result = current;
      }
    }
  }

  return result;
}
