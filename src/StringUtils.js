/*
 * (c) Kouichi Machida <k-machida@aideo.co.jp>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import chomp from './string/chomp';
import convertHtml from './string/convertHtml';
import findUrls from './string/findUrls';
import isEmpty from './string/isEmpty';
import isNotEmpty from './string/isNotEmpty';
import isNullOrEmpty from './string/isNullOrEmpty';
import nl2br from './string/nl2br';
import toLowerCase from './string/toLowerCase';
import toUpperCase from './string/toUpperCase';
import url2anchor from './string/url2anchor';

/**
 * 文字列に関するコンビニエンスメソッドを提供します。
 */
export default {
    chomp: chomp,
    convertHtml: convertHtml,
    findUrls: findUrls,
    isEmpty: isEmpty,
    isNotEmpty: isNotEmpty,
    isNullOrEmpty: isNullOrEmpty,
    nl2br: nl2br,
    toLowerCase: toLowerCase,
    toUpperCase: toUpperCase,
    url2anchor: url2anchor
};
