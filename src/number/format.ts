/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isNullOrEmpty from "../string/isNullOrEmpty";

const compileNumber = new RegExp("(\\d)(?=(\\d\\d\\d)+(?!\\d))", "g");

/**
 * 指定された数値を桁区切りとしてフォーマットします。
 *
 * @param value フォーマットする値。
 * @param defaultValue 値が null や数値、数字文字列ではない場合に返されるデフォルト値。
 * @returns フォーマットされた文字列。
 */
export default function(value: any, defaultValue: string = ""): string {
    const s = String(value);

    if (!isNullOrEmpty(s) && compileNumber.test(s)) {
        return s.replace(compileNumber, "$1,");
    } else {
        return defaultValue;
    }
}
