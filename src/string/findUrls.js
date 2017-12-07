/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

import isNullOrEmpty from './isNullOrEmpty';

const compileUrl = new RegExp('(https?)(:\/\/[^\\s　\\|]+)', 'g');

/**
 * 指定した文字列に含まれる URL を検索して取得します。
 *
 * @param {string} s 対象の文字列。
 * @returns {Array.<string>} 文字列に含まれる URL を保持した配列。
 */
export default function (s) {
    if (isNullOrEmpty(s)) {
        return [];
    }

    const urls = [];
    let matches;

    while ((matches = compileUrl.exec(s)) !== null) {
        urls.push(matches[0]);
    }

    return urls;
};
