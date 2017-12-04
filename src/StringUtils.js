/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

/**
 * 文字列に関するコンビニエンスメソッドを提供します。
 */
export default class StringUtils {

    /**
     * 文字列が無効な文字列か確認します。
     *
     * @param s 対象の文字列。
     * @returns {boolean} 文字列が null, 0 バイト文字列なら true, それ以外は false 。
     */
    static isEmpty(s) {
        return !s;
    }

    /**
     * 文字列が有効な文字列か確認します。
     *
     * @param s 対象の文字列。
     * @returns {boolean} 文字列が null, 0 バイト文字列ではない場合 true, それ以外は false 。
     */
    static isNotEmpty(s) {
        return !!s;
    }

    /**
     * 文字列の改行を <br/> に変換します。
     *
     * @param s 対象の文字列。
     * @param defaultValue デフォルト値。
     * @param {{}} options オプション設定。
     *      isXML : <br> を明示的に閉じる場合 true 。
     * @returns {string|null} 改行が <br/> に変換された文字列、もしくは null 。
     */
    static nl2br(s, defaultValue = null, options = {}) {
        const opt = Object.assign({}, {
            isXML: true
        }, options);

        return s ? s.replace(/\r?\n/g, opt.isXML ? '<br />' : '<br>') : defaultValue;
    }

    /**
     * 文字列の改行を <br/> に変換しつつ、URL をリンクにします。
     *
     * @param s 対象の文字列。
     * @param defaultValue デフォルト値。
     * @param {{}} options オプション設定。
     *      isXML : <br> を明示的に閉じる場合 true 。
     *      target : URL リンクのターゲット。
     *      className : アンカーに付与するスタイル。
     * @returns {string|null} 改行が <br/> に変換された文字列、もしくは null 。
     */
    static nl2brAndLink(s, defaultValue = null, options = {}) {
        if (s) {
            const opt = Object.assign({}, {
                isXML: true,
                target: '_self',
                className: null
            }, options);

            return s
                .replace(/(https?)(:\/\/[^\s　]+)/g, function (match) {
                    if (opt.className) {
                        return `<a href="${match}" target="${opt.target}" class="${opt.className}">${match}</a>`;
                    } else {
                        return `<a href="${match}" target="${opt.target}">${match}</a>`;
                    }
                })
                .replace(/\r?\n/g, opt.isXML ? '<br />' : '<br>');
        } else {
            return defaultValue;
        }
    }

    /**
     * 文字列を小文字にします。
     *
     * @param s 対象の文字列。
     * @param defaultValue デフォルト値。
     * @returns {string} 小文字にされた文字列、またはデフォルト値。
     */
    static toLowerCase(s, defaultValue = null) {
        if (s) {
            return s.toLowerCase();
        } else {
            return defaultValue;
        }
    }

    /**
     * 文字列を大文字にします。
     *
     * @param s 対象の文字列。
     * @param defaultValue デフォルト値。
     * @returns {string} 大文字にされた文字列、またはデフォルト値。
     */
    static toUpperCase(s, defaultValue = null) {
        if (s) {
            return s.toUpperCase();
        } else {
            return defaultValue;
        }
    }

}
