// ==UserScript==
// @name         Jira Story Name Width
// @namespace    https://github.com/kiangkuang/userscripts
// @version      0.3
// @description  Removes max-width css from story display in task board
// @author       Kiang Kuang
// @match        https://*.atlassian.net/jira/software/projects/*/boards/*
// ==/UserScript==

(() => {
  setInterval(() => {
    document.querySelectorAll('[data-test-id="platform-board-kit.ui.swimlane.swimlane-content"] > div > button')
      .forEach((x) => {
        x.style['max-width'] = 'unset';
      });
  }, 1000);
})();
