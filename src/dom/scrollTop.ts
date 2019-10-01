/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * offsetTop を取得します。
 *
 * @returns 取得された offsetTop の値。
 */
export default function(): number {
    return (document && document.defaultView) ?
        document.defaultView.pageYOffset :
        0;
}
