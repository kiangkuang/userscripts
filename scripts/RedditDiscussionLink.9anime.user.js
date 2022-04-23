// ==UserScript==
// @name         Reddit Discussion Link on 9anime
// @namespace    https://github.com/kiangkuang/userscripts
// @version      0.12
// @description  Adds a link to Reddit discussion threads on 9anime video pages
// @author       Kiang Kuang
// @include      *9anime.*/watch/*
// @include      https://www.google.com/url?q=*
// ==/UserScript==

(() => {
  const redirect = 'https://www.google.com/url?q=';
  if (window.location.href.startsWith(redirect)) {
    window.location = new URL(window.location.href).searchParams.get('q');
  }

  const $ = unsafeWindow.jQuery;

  const e = $('<a href="#" target="_blank" class="ctl" title="Reddit Discussion Thread" style="color: #ababab; padding: 0 8px;"><i class="fab fa-reddit"></i> <span>Reddit</span></a>');
  e.tooltip();
  $('#controls').prepend(e);

  setInterval(() => {
    const title = $('h2[itemprop="name"]').text().replace('(TV)', '').replace(/-/g, ' ');
    const epi = $('span[data-type="episode"]').text();
    const href = `https://www.google.com/search?btnI&q=site:reddit.com/r/anime ${title} ${epi} discussion`;
    e.attr('href', href);
  }, 1000);
})();
