/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * NaN かどうかを判定します。
 *
 * @param value 対象の値。
 * @returns NaN である場合 true, それ以外は false 。
 */
export default function(value: any): boolean {
    return typeof value === "number" && value !== value;
}
