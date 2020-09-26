/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default function () {
  const selection = window.getSelection();

  if (selection) {
    if (selection.removeAllRanges) {
      selection.removeAllRanges();
    } else {
      selection.collapse(document.body, 0);
    }
  }
}
