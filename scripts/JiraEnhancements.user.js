// ==UserScript==
// @name         Jira Enhancements
// @namespace    https://github.com/kiangkuang/userscripts
// @version      0.6
// @description  Assortment of Jira UI enhancements
// @author       Kiang Kuang
// @match        https://*.atlassian.net/jira/software/projects/*/boards/*
// ==/UserScript==

(() => {
  const LABEL_BACKGROUND = 'gold';
  const LABEL_COLOR = 'rgba(0, 0, 0, 0.6)';

  const style = document.createElement('style');
  style.innerHTML = `
  [data-test-id="platform-board-kit.ui.swimlane.swimlane-content"] button {
    max-width: unset !important;
  }

  [data-test-id="platform-card.ui.card.focus-container"] > div > div > div > div > span,
  [data-test-id="platform-card.ui.card.focus-container"] > div > div > div > div > span > span {
    background: ${LABEL_BACKGROUND} !important;
    color: ${LABEL_COLOR} !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    text-transform: uppercase !important;
    align-items: center !important;
  }

  [data-test-id="software-board.board"] {
    height: unset !important;
  }

  .ReactVirtualized__Grid__innerScrollContainer {
    max-height: calc(100vh - 200px) !important;
    overflow-y: auto !important;
  }
  `;
  document.getElementsByTagName('head')[0].appendChild(style);
})();
