// ==UserScript==
// @name         Reddit Discussion Link on AniWave
// @namespace    https://github.com/kiangkuang/userscripts
// @version      1.2
// @description  Adds a link to Reddit discussion threads on AniWave video pages
// @author       Kiang Kuang
// @include      *aniwave.*/watch/*
// @include      https://www.google.com/url?q=*
// ==/UserScript==

(() => {
  const $ = unsafeWindow.jQuery;

  const e = $('<a href="#" target="_blank" class="ctrl"><i class="fab fa-reddit"></i> Reddit</a>');
  $('#controls .left').prepend(e);

  e.hover(() => {
    const title = $('#w-info .title').text().replace('(TV)', '').replace(/-/g, ' ');
    const epi = $('#w-servers .tip > div:first-child > b').text();
    const href = `https://www.google.com/search?q=site:reddit.com/r/anime ${encodeURIComponent(title)} ${epi} discussion`;
    e.attr('href', href);
  });
})();
