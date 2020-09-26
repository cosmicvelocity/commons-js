/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * テキストを取得します。
 *
 * @param element 対象の DOM 。
 * @param selector テキストを取得する対象のセレクタ。
 * @param defaultValue 取得できなかった場合のデフォルト値。
 * @returns セレクタに該当するノードのテキスト、もしくはデフォルト値。
 */
export default function (
  element: ParentNode | null,
  selector: string,
  defaultValue = ""
): string {
  if (element) {
    const node = element.querySelector(selector);

    if (node !== null) {
      return node.textContent || "";
    } else {
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
}
