/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

const compare = (x, y) => x - y;

/**
 * 配列で最も大きな値を取得します。
 *
 * @param {Array.<*>} arr 対象の配列。
 * @param {Function} comp 値を比較する関数。
 * @returns {*|undefined} 配列中の最大値、要素がない配列の場合 undefined 。
 */
export default function (arr, comp = compare) {
    let result;

    if (Array.isArray(arr)) {
        for (let index = 0; index < arr.length; index++) {
            const current = arr[index];

            if ((result === undefined) || comp(current, result) > 0) {
                result = current;
            }
        }
    }

    return result;
};
