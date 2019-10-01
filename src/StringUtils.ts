/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import chomp from "./string/chomp";
import convertHtml from "./string/convertHtml";
import findUrls from "./string/findUrls";
import isEmpty from "./string/isEmpty";
import isNotEmpty from "./string/isNotEmpty";
import isNullOrEmpty from "./string/isNullOrEmpty";
import nl2br from "./string/nl2br";
import toLowerCase from "./string/toLowerCase";
import toUpperCase from "./string/toUpperCase";
import url2anchor from "./string/url2anchor";

/**
 * 文字列に関するコンビニエンスメソッドを提供します。
 */
export default {
    chomp,
    convertHtml,
    findUrls,
    isEmpty,
    isNotEmpty,
    isNullOrEmpty,
    nl2br,
    toLowerCase,
    toUpperCase,
    url2anchor,
};
