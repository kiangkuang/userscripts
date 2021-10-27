// ==UserScript==
// @name         Reddit Spoiler Text Toggle
// @namespace    https://github.com/kiangkuang/userscripts
// @version      0.5
// @description  Toggles spoiler text visibility on click
// @author       Kiang Kuang
// @include      https://www.reddit.com/*
// ==/UserScript==

(() => {
  setInterval(() => {
    document.querySelectorAll("a[href^='/s ']").forEach((x) => {
      const match = x.getAttribute('href').match(/\/s (?<title>.+)/);
      if (match) {
        x.title = match.groups.title;
        x.href = '/s';
      }
    });

    document.querySelectorAll("a[href='/s']").forEach((x) => {
      if (!x.redditSpoilerTextToggle) {
        x.redditSpoilerTextToggle = true;
        x.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          const spoiler = x.title;
          const text = x.textContent;

          x.title = text;
          x.textContent = spoiler;
        });
      }
    });
  }, 1000);
})();
