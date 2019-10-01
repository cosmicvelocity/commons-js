/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import nl2br, { INl2brOptions } from "./nl2br";
import url2anchor, { IUrl2anchorOptions } from "./url2anchor";

interface IConvertHtmlOptions extends INl2brOptions, IUrl2anchorOptions {

}

/**
 * 文字列の改行を <br/> に変換しつつ、URL をリンクにします。
 *
 * @param s 対象の文字列。
 * @param defaultValue s が有効な文字列ではない場合 (null または '' など) のデフォルト値。
 * @param options オプション設定。
 *      isXML : <br> を明示的に閉じる場合 true 。
 *      target : URL リンクのターゲット。
 *      className : アンカーに付与するスタイル。
 * @returns 改行が <br/> に変換された文字列、もしくは null 。
 */
export default function(s: string, defaultValue?: string, options?: IConvertHtmlOptions): string {
    if (s) {
        return url2anchor(nl2br(s, defaultValue, options), defaultValue, options);
    } else {
        return defaultValue || "";
    }
}
