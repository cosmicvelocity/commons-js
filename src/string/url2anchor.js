/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

/**
 * URL をアンカーにします。
 *
 * @param {string} s 対象の文字列。
 * @param {string|null} defaultValue s が有効な文字列ではない場合 (null または '' など) のデフォルト値。
 * @param {{}} options オプション設定。
 *      isXML : <br> を明示的に閉じる場合 true 。
 *      target : URL リンクのターゲット。
 *      className : アンカーに付与するスタイル。
 * @returns {string|null} URL がアンカーに変換された文字列、もしくは null 。
 */
export default function (s, defaultValue = null, options = {}) {
    if (s) {
        const opt = Object.assign({}, {
            isXML: true,
            target: '_self',
            className: null
        }, options);

        /* eslint no-irregular-whitespace: "off" */
        return s
            .replace(/(https?)(:\/\/[^\s　]+)/g, function (match) {
                if (opt.className) {
                    return `<a href="${match}" target="${opt.target}" class="${opt.className}">${match}</a>`;
                } else {
                    return `<a href="${match}" target="${opt.target}">${match}</a>`;
                }
            });
    } else {
        return defaultValue;
    }
}
