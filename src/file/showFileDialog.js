/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

"use strict";

const defaultOptions = {

    /**
     * ダミーで生成される要素の name 属性値。
     */
    name: 'dummy[]',

    /**
     * ダミー要素を追加する親。
     */
    container: document.body,

    /**
     * デフォルトのコールバック。
     */
    callback: function () {

    }

};

/**
 * ファイルを開くダイアログを表示します。
 *
 * @param {{
 *      name: string,
 *      container: *,
 *      callback: Function,
 *      multiple: boolean,
 *      accept: string
 *      }} options オプション設定。
 */
export default function (options) {
    // デフォルトパラメーターを設定します。
    options = Object.assign({}, defaultOptions, options);

    // 残っていた要素を削除します。
    const existsNode = document.querySelector(`[name="${options.name}"]`);

    if (existsNode !== null) {
        existsNode.parentElement.removeChild(existsNode);
    }

    // input[type="file"] 要素を生成します。
    const fileElement = document.createElement('input');

    fileElement.type = 'file';
    fileElement.name = options.name;

    if ((options.multiple !== undefined) && options.multiple) {
        fileElement.multiple = 'multiple';
    }

    if (options.accept !== undefined) {
        fileElement.accept = options.accept;
    }

    // イベントハンドラを設定します。
    const handleChange = function (evt) {
        fileElement.removeEventListener('change', handleChange);

        // コールバックを呼び出し。
        options.callback.call(this, evt.target.files);

        // 要素を削除します。
        document.body.removeChild(fileElement);
    };

    fileElement.addEventListener('change', handleChange);

    // 要素を追加します。
    options.container.appendChild(fileElement);

    // クリックイベントを発生させて、ファイル選択ダイアログを表示します。
    fileElement.style.display = 'none';
    fileElement.click();
}
