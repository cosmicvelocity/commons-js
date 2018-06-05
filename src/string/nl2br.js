/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

/**
 * 文字列の改行を <br/> に変換します。
 *
 * @param s 対象の文字列。
 * @param {string|null} defaultValue s が有効な文字列ではない場合 (null または '' など) のデフォルト値。
 * @param {{}} options オプション設定。
 *      isXML : <br> を明示的に閉じる場合 true 。
 * @returns {string|null} 改行が <br/> に変換された文字列、もしくは null 。
 */
export default function (s, defaultValue = null, options = {}) {
    const opt = Object.assign({}, {
        isXML: true
    }, options);

    return s ? s.replace(/\r?\n/g, opt.isXML ? '<br />' : '<br>') : defaultValue;
}
