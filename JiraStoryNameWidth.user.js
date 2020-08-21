// ==UserScript==
// @name         Jira Story Name Width
// @namespace    https://github.com/kiangkuang
// @version      0.1
// @description  Removes max-width css from story display in task board
// @homepage     https://github.com/kiangkuang/userscripts
// @supportURL   https://github.com/kiangkuang/userscripts/issues
// @updateURL    https://github.com/kiangkuang/userscripts/raw/master/JiraStoryNameWidth.user.js
// @downloadURL  https://github.com/kiangkuang/userscripts/raw/master/JiraStoryNameWidth.user.js
// @author       Kiang Kuang
// @match        https://*.atlassian.net/jira/software/projects/*/boards/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('[data-test-id="platform-board-kit.ui.swimlane.swimlane-content"] > div > button').forEach(x => x.style['max-width'] = 'unset')
})();
