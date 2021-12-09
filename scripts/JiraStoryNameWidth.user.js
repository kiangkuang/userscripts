// ==UserScript==
// @name         Jira Story Name Width
// @namespace    https://github.com/kiangkuang/userscripts
// @version      0.4
// @description  Removes max-width css from story display in task board
// @author       Kiang Kuang
// @match        https://*.atlassian.net/jira/software/projects/*/boards/*
// ==/UserScript==

(() => {
  const style = document.createElement('style');
  style.innerHTML = `
  [data-test-id="platform-board-kit.ui.swimlane.swimlane-content"] button {
    max-width: unset !important;
  }
  [data-test-id="platform-card.ui.card.focus-container"] .css-4wyy7n {
    background-color: gold !important;
  }
  [data-test-id="software-board.board"] {
    height: unset !important;
  }
  `;
  document.getElementsByTagName('head')[0].appendChild(style);
})();
