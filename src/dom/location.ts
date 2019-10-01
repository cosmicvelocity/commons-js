/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

interface IPoint {
    x: number;
    y: number;
}

const emptyPoint: IPoint = {
    x: 0,
    y: 0,
};

/**
 * 要素の絶対位置を取得します。
 *
 * @param element 対象の要素。
 * @returns 要素の絶対位置。
 */
export default function(element: Element | null): IPoint {
    if (element && element.ownerDocument && element.ownerDocument.defaultView) {
        const rect = element.getBoundingClientRect();
        const view = element.ownerDocument.defaultView;

        return {
            x: rect.left + view.pageXOffset,
            y: rect.top + view.pageYOffset,
        };
    } else {
        return emptyPoint;
    }
}
