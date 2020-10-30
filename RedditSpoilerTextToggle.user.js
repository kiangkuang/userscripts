// ==UserScript==
// @name         Reddit Spoiler Text Toggle
// @namespace    https://github.com/kiangkuang
// @version      0.2
// @description  Toggles spoiler text visibility on click
// @homepage     https://github.com/kiangkuang/userscripts
// @supportURL   https://github.com/kiangkuang/userscripts/issues
// @updateURL    https://github.com/kiangkuang/userscripts/raw/master/RedditSpoilerTextToggle.user.js
// @downloadURL  https://github.com/kiangkuang/userscripts/raw/master/RedditSpoilerTextToggle.user.js
// @author       Kiang Kuang
// @include      https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        document.querySelectorAll("a[href^='/s ']").forEach(x => {
            var match = x.getAttribute("href").match(/\/s (.+)/);
            if (match) {
                x.title = match[1];
                x.href = "/s";
            }
        });

        document.querySelectorAll("a[href='/s']").forEach(x => {
            if (x.onclick === null) {
                x.onclick = (e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    var spoiler = x.title;
                    var text = x.textContent;

                    x.title = text;
                    x.textContent = spoiler;
                };
            }
        });
    }, 1000);
})();
