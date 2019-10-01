/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * 属性値を取得します。
 *
 * @param node 対象のノード。
 * @param name 属性名。
 * @param defaultValue 属性がなかった場合のデフォルト文字列。
 * @returns 属性の値、もしくはデフォルト文字列。
 */
export default function(node: Element | null, name: string, defaultValue: string = ""): string {
    const attr = (node && node.attributes) ?
        node.attributes.getNamedItem(name) : null;

    if (attr) {
        return attr.textContent || "";
    } else {
        return defaultValue;
    }
}
