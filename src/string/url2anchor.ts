/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

export interface IUrl2anchorOptions {
    className?: string;
    isXML: boolean;
    target: string;
}

/**
 * URL をアンカーにします。
 *
 * @param s 対象の文字列。
 * @param defaultValue s が有効な文字列ではない場合のデフォルト文字列。
 * @param options オプション設定。
 *      isXML : <br> を明示的に閉じる場合 true 。
 *      target : URL リンクのターゲット。
 *      className : アンカーに付与するスタイル。
 * @returns URL がアンカーに変換された文字列、もしくはデフォルト文字列。
 */
export default function(s: any, defaultValue: string = "", options?: IUrl2anchorOptions): string {
    if (s) {
        const opt = Object.assign({}, {
            className: null,
            isXML: true,
            target: "_self",
        }, options);

        return s
            .replace(/(https?)(:\/\/[^\s　]+)/g, (match: any) => {
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
