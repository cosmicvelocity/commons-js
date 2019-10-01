/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * 文字列を小文字にします。
 *
 * @param s 対象の文字列。
 * @param defaultValue s が有効な文字列ではない場合のデフォルト文字列。
 * @returns 小文字にされた文字列、またはデフォルト文字列。
 */
export default function(s: any, defaultValue: string = ""): string {
    if (s) {
        return s.toLowerCase();
    } else {
        return defaultValue;
    }
}
