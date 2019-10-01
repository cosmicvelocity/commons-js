/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/**
 * 指定されたサイズ情報をピクセル値に換算します。
 *
 * @param width 幅を表す文字列。
 * @return ピクセルで表した値。
 */
export default function(width: string): number {
    // 幅を設定したダミーの要素を追加し、
    // そのサイズがどうなったかを得る事でピクセル値に換算します。
    const tmp = document.createElement("div");

    tmp.style.width = width;

    document.body.appendChild(tmp);

    const pixelWidth = tmp.offsetWidth;

    document.body.removeChild(tmp);

    return pixelWidth || 0;
}
