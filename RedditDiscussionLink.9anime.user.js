// ==UserScript==
// @name         Reddit Discussion Link on 9anime
// @namespace    https://github.com/kiangkuang
// @version      0.2
// @description  Adds a link to Reddit discussion threads on 9anime video pages
// @homepage     https://github.com/kiangkuang/userscripts
// @supportURL   https://github.com/kiangkuang/userscripts/issues
// @updateURL    https://github.com/kiangkuang/userscripts/raw/master/RedditDiscussionLink.9anime.user.js
// @downloadURL  https://github.com/kiangkuang/userscripts/raw/master/RedditDiscussionLink.9anime.user.js
// @author       Kiang Kuang
// @match        *.9anime.to/watch/*
// @match        *.9anime.ru/watch/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var $ = window.jQuery;

    var e = $(`<div class="control" title="Reddit Discussion Thread"><i class="icon icon-reddit"></i> <span>Reddit</span></div>`);
    e.tooltip();
    e.click(function() {
        var title = $("h2.title").text();
        var epi = Number($(".server a.active").text());
        var href = `https://www.google.com/search?btnI&q=site:reddit.com/r/anime ${title} episode ${epi}`;
        window.open(href);
    });

    $('#controls').prepend(e);
})();
