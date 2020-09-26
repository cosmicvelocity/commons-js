/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import getBoundingClientRect from "./getBoundingClientRect";

/**
 * 指定したセレクタの getBoundingClientRect を取得して返します。
 *
 * @param element 対象の要素。
 * @param selector 対象とする要素のセレクタ。
 * @returns 取得した領域の配列。
 */
export default function (
  element: ParentNode | null,
  selector: string
): DOMRect[] {
  const rects = [];

  if (element) {
    const nodes = element.querySelectorAll(selector);

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < nodes.length; index++) {
      const node = nodes[index];
      const rect = getBoundingClientRect(node);

      if (rect) {
        rects.push(rect);
      }
    }
  }

  return rects;
}
