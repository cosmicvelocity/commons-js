/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import isNullOrEmpty from "./isNullOrEmpty";

const compileUrl = new RegExp("(https?)(:\/\/[^\\s　\\|]+)", "g");

/**
 * 指定した文字列に含まれる URL を検索して取得します。
 *
 * @param s 対象の文字列。
 * @returns 文字列に含まれる URL を保持した配列。
 */
export default function(s: string): string[] {
    if (isNullOrEmpty(s)) {
        return [];
    }

    const urls = [];
    let matches: any;

    // tslint:disable-next-line: no-conditional-assignment
    while ((matches = compileUrl.exec(s)) !== null) {
        urls.push(matches[0]);
    }

    return urls;
}
