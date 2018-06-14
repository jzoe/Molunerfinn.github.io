/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/0tolearnfe/index.html","cbae51e1cf2a1f8670ef143a1ea63f17"],["/2016/index.html","6a3497362ab629ba63949dfb1808ee04"],["/2017-summary/index.html","2c8d70a6b199d099064aa1125b083151"],["/Electron-vs-nwjs-part2/index.html","29064d0bc646691434c20a106517e3ef"],["/Electron-vs-nwjs/index.html","3f0872645c407e8fe719defd13ba50ce"],["/FullScreenBackground(css)/index.html","95c9ce1292c885b422abfddf1ad37470"],["/PC-Chrome-PWA/index.html","dcdc75a3fca9019b5da149f01bc34bd4"],["/PerfectMoviePerWeek3/index.html","8b20e75f1b4abd78ba9cb274bafc7f00"],["/PerfectMoviePerWeek4/index.html","a0076a39bf9c3f152c02b07be488e95f"],["/PerfectMoviePerWeek5/index.html","28e60abd26a0e41ca15530f331d2329c"],["/Use-Jest-To-Test-Vue-Koa/index.html","125f6fb20321b06b6bd17f6968988993"],["/Vue+Koa/index.html","8e1cc91916c81de7a8772a7cf79f2ce7"],["/WEEK89/index.html","7d235b9cfa72e6e7e817819464af14da"],["/WEEK90/index.html","dd5a1a19ffb9054c53fdc3f46c934040"],["/WEEK91/index.html","ab30e61a329a4bfcb6176b8bec530ce2"],["/WEEK92/index.html","eae659dba095e112160ab591ed5d3e25"],["/WEEK93/index.html","286f1529d1ac00f036f7085577fc098a"],["/Webpack-Optimize/index.html","c7269e586e9ada3ba056cd26a68ca33e"],["/about/index.html","4b37ae4e3533b81180e79a926f7a57ac"],["/archives/2015/05/index.html","e22b045b0732c7c248a7bf3f6376ae61"],["/archives/2015/06/index.html","eb440c9b68b8198c10d863862c42f8ac"],["/archives/2015/06/page/2/index.html","7e7f424430d2803610c0e1201b6bd93d"],["/archives/2015/08/index.html","425e96a5e18b9fa6966dfb1d2e48991a"],["/archives/2015/09/index.html","c0ef4f3abc078bded6c512eb17d69297"],["/archives/2015/11/index.html","c5b6c5925520b832b8c9f0f146b4f1e4"],["/archives/2015/12/index.html","4d240593a7f0b1444f02ac0ab9406de3"],["/archives/2015/index.html","7bd2f4a5ca853f2b51a40d11b9299b6d"],["/archives/2015/page/2/index.html","0a483c466b953d59b47bb15564cd82af"],["/archives/2015/page/3/index.html","d047f18e6bedcc7becea26804b514429"],["/archives/2015/page/4/index.html","c5815778bbe6867f9a71493ef3483f2a"],["/archives/2016/02/index.html","9e81a11600c1622886f21b24a0631cf7"],["/archives/2016/03/index.html","8019143db40f0ef8a6f6ad8d02080019"],["/archives/2016/04/index.html","35606924565427fb04d2c1f55fbc7005"],["/archives/2016/05/index.html","ef008382e01574b0a6998edc287e128a"],["/archives/2016/06/index.html","1fff4459b7f0abdc2640b37de344ea3e"],["/archives/2016/07/index.html","b7b1265d5c3db759af3ab4e8d2479b38"],["/archives/2016/08/index.html","d2202fb5bf23b8f2676a021e0f379e89"],["/archives/2016/11/index.html","9f252b73ea144e3bce2bea7855b50ba9"],["/archives/2016/12/index.html","61be3a886aa22ca6c53454c6025628fd"],["/archives/2016/index.html","f3343cc20e0c3bbe72c9ffdff1c65180"],["/archives/2016/page/2/index.html","9433d38dd32a735dcb123426d890f299"],["/archives/2017/01/index.html","6be3c3c071537ec75886450e6a5fb65c"],["/archives/2017/04/index.html","97554318899640552a7b3b402c1060e0"],["/archives/2017/05/index.html","d74b5596f48968e7b9960081292e4c8f"],["/archives/2017/06/index.html","b27797620a40681cae0bf8483bddee10"],["/archives/2017/07/index.html","ef85cb3788900c1ab05104a0a8c68f1c"],["/archives/2017/09/index.html","b1006184a2bc842f8cf34af681fa4872"],["/archives/2017/10/index.html","43d845d58b2f3975dcedf2a889f5f068"],["/archives/2017/11/index.html","b8d8a65f0f3abfa7b5e3c7a34bf6376f"],["/archives/2017/12/index.html","6b8731a2df2b53f84465e4f31117c292"],["/archives/2017/index.html","d5dc1aaa785e34e4591096d58fd36e32"],["/archives/2017/page/2/index.html","26c92fde37ea258f336a23021f465132"],["/archives/2018/01/index.html","419156025707e715556c05ace94d9eed"],["/archives/2018/02/index.html","0aae91a614580e2ccbb199206a1eabec"],["/archives/2018/03/index.html","d31a1b93bbed19fed211d6dff305f943"],["/archives/2018/04/index.html","6259de694ab9db9539060e6bb46cd5e3"],["/archives/2018/05/index.html","99386267862b639ff7ad257a83be0c85"],["/archives/2018/06/index.html","28d06ef9e0e80ca28dd6c2c43a569e9d"],["/archives/2018/index.html","9e1077e302f4bd2ce79d33298ac9b711"],["/archives/2018/page/2/index.html","a1e606e67c9f0fcececc6d55db2f97e8"],["/archives/2018/page/3/index.html","7da6a4e7bdf37756efe68455315d1e07"],["/archives/index.html","86611d5d095d2d98269ee9e08e2fed31"],["/archives/page/10/index.html","1b44fde20f21b6a016b3848338bc71a7"],["/archives/page/2/index.html","55fba6f9abefe408cd6e9ed6a05f5183"],["/archives/page/3/index.html","f48c3f1a8042b7015c3e2d4f50c06928"],["/archives/page/4/index.html","2f383250a2dac540506903dee83697c7"],["/archives/page/5/index.html","6937b04167a911938d6c9483474f91f6"],["/archives/page/6/index.html","123d466aa4409013d21bec55d299b51a"],["/archives/page/7/index.html","e00b50162ecb64e8a8571c691d35bc30"],["/archives/page/8/index.html","0619449606b99cb41024024979a6a211"],["/archives/page/9/index.html","726b42a17526eaa4c76eb0e54fa176ce"],["/atom.xml","7c387cdff945ca8bf52dbf5ae4c64aa3"],["/categories/HEXO日常/index.html","982702b539e25588daf3bef373d9f3c4"],["/categories/HEXO日常/日志/index.html","8d9d5866c173f2afb4ecc986f32f0a40"],["/categories/Linux/index.html","2ee3a19080fdf2f7700a61d8acb2d8fa"],["/categories/Linux/日志/index.html","6dbd7683eb997006cdc76bd5c0259fe7"],["/categories/Web/index.html","493654baae001eedc1aaeabbff3f0073"],["/categories/Web/page/2/index.html","fdd103a8e912a29e7a00c96bc8f85f7b"],["/categories/Web/page/3/index.html","984cfd62067cbd0b1390c1e018001f81"],["/categories/Web/page/4/index.html","726ce280c2af5dbc7528e51aeef49383"],["/categories/Web/page/5/index.html","c7e6a92574c208ba4a5220e4de3d12d4"],["/categories/Web/开发/Nodejs/index.html","28224c639e49530b58011f497a0189d4"],["/categories/Web/开发/TypeScript/index.html","dbd193cdba5c4d5cdef2aa11622911f8"],["/categories/Web/开发/electron/index.html","3757547f32dc1eabba72e25d42336c8e"],["/categories/Web/开发/index.html","bf98337ffde6f0f842542345a9983fd0"],["/categories/Web/开发/page/2/index.html","3bca0725332e9d9b53c6e26c182011c1"],["/categories/Web/开发/page/3/index.html","74ecbf1f05c1e782d74f2bfbce8f3020"],["/categories/Web/开发/page/4/index.html","d9c05b80ce42fa56f4ae25cfca63c699"],["/categories/Web/开发/page/5/index.html","8c89b3531f499a422ab8412f659c0f5a"],["/categories/Web/日志/index.html","b235f2041a57cf4636e406ba5221bd45"],["/categories/Web/日志/翻译/index.html","f49c6778d4fa72f2ea43f137206dba15"],["/categories/Web/日志/随笔/index.html","fc78c7e3d8142fc7a0419f337cf6ba7a"],["/categories/WordPress日常/index.html","f2895681997f6b5cfc78fb37d58d114c"],["/categories/WordPress日常/page/2/index.html","afcf082c5c1d53326a549ae2442b07fc"],["/categories/WordPress日常/日志/index.html","1b896c1af8f175d555f76d463cb666d5"],["/categories/WordPress日常/日志/page/2/index.html","bf9bdf3086d4c2f95e9a0d9efbcb70cc"],["/categories/hexo/index.html","75dfecd06f42666889aba806a9cf2c5d"],["/categories/index.html","bd10ec3b61febe08186b6306bab811fc"],["/categories/其他/index.html","0c091450e7862fb5f8de69458cbdcbae"],["/categories/其他/极客/index.html","d169fa2f868be24b909c2ee68be5022c"],["/categories/周电/index.html","c71e4c803a0c3f334951bc946951ca26"],["/categories/周电/日志/index.html","d803f40ac65156901e614fa0a27bf95b"],["/categories/日志/index.html","007f75148d9f8090b2ee463f02996825"],["/categories/日志/周电/index.html","a0a72f0b7ca4039a660c7f1d5300a4f0"],["/categories/日志/随笔/index.html","e8d5fecacd79e550e7ac4d27db9095f9"],["/categories/笔记/index.html","188e95731121e2616e8437b6282a82a3"],["/centos-1/index.html","f52c3681f18ce4790d39986fa242cc7d"],["/centos7-1inwin8-1/index.html","552b9ec20e604fbc6a96bec0e1c8c273"],["/css/index.css","b828801569a4bdd13ed4e957169700e4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/electron-vue-1/index.html","94a06f40af9954bad2a5020d5ac1fe01"],["/electron-vue-2/index.html","8a3f5d9d79afe17ef48191308478ad28"],["/electron-vue-3/index.html","d566efd43b4f68c3b35584d0711adf7e"],["/electron-vue-4/index.html","a13d4e20d6cc09355cb98f87ae66e7b9"],["/electron-vue-5/index.html","6ce9f91ef673f51531fa6b883d8b5a23"],["/element-default-theme/index.html","868f2a596a174438f7505064fef64183"],["/fe-be-router-render/index.html","c51f2435791e751ea7a28af996d7ab89"],["/fethefirst-2/index.html","cd5e13af10624aebd8f47fcf11e10707"],["/fethefirst/index.html","8f6fbd70338380b13e6aea3d6a1a2d28"],["/gear-system/index.html","99386b14fc015bb46bf3c174f8d6a7cc"],["/git-ssh2https/index.html","df1dd4dfcf152ff66c79ae64d323ca6f"],["/hello-world-1/index.html","c979067ea41168a9363302907f4e3ae5"],["/hexo-travisci-https/index.html","c7d170c9fe8f5c420b3503f95410429a"],["/hexodaily-1/index.html","e3b85b7b6ed2dca38067917d5c3e5d1d"],["/iTerm2-lrzsz/index.html","d2f626d276262516928b59a1ca8deb63"],["/images/icons/icon-144.png","77ff48fc0e9d1928e7de882687a2206b"],["/images/icons/icon-192.png","84dc14588b23f97779da8f8b0969d4ad"],["/images/icons/icon-36.png","5c953ea6f63a79f355784c3f9f895b70"],["/images/icons/icon-48.png","8b51531a5c3dd42e5c67451b890c4472"],["/images/icons/icon-72.png","bf9669545978443a03c14e07664dc885"],["/images/icons/icon-96.png","7669c9f2e04be5935dd5b43832d3bd97"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["/index.html","63a7e31a3d4d13ec2398df768c3ab772"],["/jquery-1/index.html","8134101832329371b89c761ced060e03"],["/js/copy.js","48b75585cc96794afdcbbb88d1aea958"],["/js/fancybox.js","1992ba5db02e1d04932b0ba98988c9d8"],["/js/fireworks.js","20ecd7a49483cdda7bd33b8f5a11253f"],["/js/head.js","802d516f90b4e87c40edc27d3eb4ba79"],["/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/scroll.js","ea9bda0bc76027cefc32061684ff3fc8"],["/js/search/algolia.js","2febeac19b5e529a3e1b1e6de4d031f1"],["/js/search/local-search.js","0ea42411a9ea0a3359c1bcec1a558824"],["/js/sidebar.js","e3308924d89861ff54f17f8de0f864f0"],["/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["/js/transition.js","3e9daf655da50b0eda5324a81a2b9720"],["/js/utils.js","8250feefdfa7ac2e0bc56194a507580b"],["/koa2-wechatpay/index.html","b332776e37c41487894705ffabaead1a"],["/make-a-hexo-theme/index.html","c4d922e934d1e6d6250ea43b38102f1d"],["/make-a-picgo/index.html","f20c2b0fd11c1ffcff3a48c7e45ce35e"],["/manifest.json","1ae58b354c872862c45f7b8eaa5c935f"],["/markdown-wordpress/index.html","522dcd271aeecdebd553bfdfc22ca45c"],["/marklinejs/index.html","a14302685a67ea5d0e7fb8617b0d041f"],["/myfe/index.html","737b843a06e7917ac95fb34c79dac2af"],["/nodejs-1/index.html","9b4cc75da8132ad40c88acf4e30a0e70"],["/nodejs-2/index.html","d3f4c98f60c5d360baca6f22378eb776"],["/nodejs-3/index.html","a52e7d3ad289920c8a11453fcb17fc07"],["/nokian1-root/index.html","e4a6b9b27c3ea304d37caa99a5d5941e"],["/note-for-picgo/index.html","7c14f811072d45e7e5bfc0d672777a9e"],["/notebook2016/index.html","dddd1286b431dfca61bf2c0a556f0216"],["/observer-vs-pubsub-pattern/index.html","e6227b77d90dedfb42ae93eda37ba2db"],["/page/10/index.html","e30bdf34f4490df92d35cf1d0a823185"],["/page/2/index.html","b377c182e03b095c8944f35bac1d83f4"],["/page/3/index.html","1e98d406d305de2a484a530ef327b8f9"],["/page/4/index.html","79936e1aa1a215a3b90f4a826ae04ceb"],["/page/5/index.html","c8c775507c940246d72cf30993000660"],["/page/6/index.html","b487b295d8a4f9e232c007fb65818d0c"],["/page/7/index.html","6a01d4a3eb52f9ec12b667dcfa0cfabb"],["/page/8/index.html","4c0baef06f8ed392c3fb93413a489b2d"],["/page/9/index.html","8be683cae2bb17fbc6f3bb34b37a1619"],["/picgo-v1.5-update/index.html","61f3bdc4444a878bdc75a732eb01c619"],["/process-thread-coroutine/index.html","cd0d99f037c74746b9090dab2d47c686"],["/sitemap.xml","30b29fba4ba9df4e4de5d11bdffb4a6f"],["/slide-support/index.html","549a9a5efbfbd1bcef5c82adb1ecfc36"],["/slides/index.html","856bbb45538800b3887b7a7799af40bc"],["/something&nothing/index.html","891a1ea4710eacef4be03f85c2d94d3c"],["/something-about-settimeout/index.html","df90995b4d0037e2fb9cbda5c3b758cf"],["/tags/Electron-vue/index.html","77df390d705a84223f12222157a48fca"],["/tags/Electron/index.html","58d0a22605b9806cfe83969d696fef66"],["/tags/JS/index.html","ee8f66f9e1e7c3990dafc6f8ac477901"],["/tags/Koa/index.html","63a79bd0d9455d92873b1f3c99cd9a87"],["/tags/Mac/index.html","ecec63317e8c3fbbdfda03fc4985f3eb"],["/tags/Nodejs/index.html","a5c952567c5abc6bccda00c8174080ce"],["/tags/Nodejs/page/2/index.html","20faeb4a85a6936a6a7f0fd9b5bb0c9c"],["/tags/NokiaN1/index.html","675a37cfe9e8b4dda5fe200da3082018"],["/tags/PWA/index.html","efe3654b07696f07fd024a3d9880f923"],["/tags/TypeScript/index.html","b6780d1ba236054dc37af607bf7085c9"],["/tags/VSCode/index.html","180d4e4ec9f2137f297aa2eed8355f0b"],["/tags/Vue/index.html","a65920203cc95d2dcd5e33ad0050064e"],["/tags/Vue/page/2/index.html","4d6b21bc014ba547422033c36bc25522"],["/tags/Webpack/index.html","180891e62358795380f1f84b4b421fc8"],["/tags/electron/index.html","8efc875730e48e0174dc8479e3a9ce14"],["/tags/git/index.html","926f608b61b9e47021d2d0cc2463e5f2"],["/tags/hexo/index.html","c2fa79fdd0a74a5886d5d74b3780c698"],["/tags/index.html","e0e0efa613fdcd3f7636232f46a3e160"],["/tags/note/index.html","c3ddd6dd4114b3a2d1dc564e506655fe"],["/tags/vue/index.html","bb12c9f87dce40e05ee638cfbd0d7098"],["/tags/web/index.html","5d375c8b5e683d7467d45d44cf31a775"],["/tags/前端/index.html","605377dc64d2fd8124263ef21cae8af6"],["/tags/前端/page/2/index.html","44239d980d87e3bb6661037c4a9e27b4"],["/tags/前端/page/3/index.html","cf874046f909ef71a1a147061f2265ef"],["/tags/前端/page/4/index.html","712cd930d03b0d27e662c3b77f67efa5"],["/tags/前端/page/5/index.html","00676a83a71717ff866c17a2bf570699"],["/tags/后端/index.html","58ba79d224bde359c1df248968230857"],["/tags/更新日志/index.html","a22df24c798447fd936828cd62d81799"],["/tags/电影/index.html","732c880a7408d8c4392587269018e8ed"],["/tags/电影/page/2/index.html","135b87f571b2d2f349bab82a54510164"],["/tags/笔记/index.html","439baca3f79187c1a6d7b28c5c42d5fd"],["/tags/随笔/index.html","b9cf579abab8bd8fb207e70d44eec8c6"],["/thinkself-1/index.html","d85723dd5a8770bb40828cf7f2f627b7"],["/vscode-extension-develop-1/index.html","9d11f0021bee5e586e3d00a5a91b2469"],["/vue-components/index.html","f885d27ca97428ce330f6f179e1d7083"],["/vuejs-1/index.html","4de7edbb39d287c411e77b9c6ac19adb"],["/wdinst3/index.html","68a8a59799f04ecac0a1302dd8946d4b"],["/wordpress-theme-setup-record/index.html","128bb2013ef84f8ceb3e6b87a9230a24"],["/wpdaily-0616/index.html","a1fae357cf1b4f48b5c21b2f5bb8718c"],["/wpdaily-0618/index.html","56323db2c088fdf0486e05da27db87b3"],["/wpdaily0606-1/index.html","7720a1d97cb91e32d6973ec681863150"],["/wpdaily0611/index.html","63b630ecc3b40dd44c74389208dac340"],["/wpdaily0613/index.html","74c67b3a29600486eed3bd6db1511028"],["/wpdaily0620/index.html","bdf9a887e2a88916f24690960bfb7133"],["/wpdaily0808/index.html","be3fee5ea7278cf2d033141004480cf2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcss.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"molunerfinn.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"ws1.sinaimg.cn"});




