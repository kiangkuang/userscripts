// ==UserScript==
// @name         Reddit Discussion Link on 9anime
// @namespace    https://github.com/kiangkuang
// @version      0.6
// @description  Adds a link to Reddit discussion threads on 9anime video pages
// @homepage     https://github.com/kiangkuang/userscripts
// @supportURL   https://github.com/kiangkuang/userscripts/issues
// @updateURL    https://github.com/kiangkuang/userscripts/raw/master/RedditDiscussionLink.9anime.user.js
// @downloadURL  https://github.com/kiangkuang/userscripts/raw/master/RedditDiscussionLink.9anime.user.js
// @author       Kiang Kuang
// @include      *9anime.*/watch/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;

    var e = $(`<a href="#" target="_blank" class="ctl" title="Reddit Discussion Thread" style="color: #ababab; padding: 0 8px;"><i class="fab fa-reddit"></i> <span>Reddit</span></a>`);
    e.tooltip();
    $('#controls').prepend(e);

    setInterval(() => {
        var title = $('h2[itemprop="name"]').text();
        var epi = $('span[data-type="episode"]').text();
        var href = `https://www.google.com/search?btnI&q=site:reddit.com/r/anime ${title} ${epi}`;
        e.attr("href", href);
    }, 1000);
})();
