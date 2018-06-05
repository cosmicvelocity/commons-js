/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

/**
 * 指定されたサイズ情報をピクセル値に換算します。
 *
 * @param {string} width 幅を表す文字列。
 * @return {number} ピクセルで表した値。
 */
export default function (width) {
    // 幅を設定したダミーの要素を追加し、
    // そのサイズがどうなったかを得る事でピクセル値に換算します。
    const tmp = document.createElement('div');

    tmp.style.width = width;

    document.body.appendChild(tmp);

    const pixelWidth = tmp.offsetWidth;

    document.body.removeChild(tmp);

    return pixelWidth;
}
