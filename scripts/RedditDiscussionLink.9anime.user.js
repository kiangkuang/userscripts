// ==UserScript==
// @name         Reddit Discussion Link on 9anime
// @namespace    https://github.com/kiangkuang/userscripts
// @version      1.0
// @description  Adds a link to Reddit discussion threads on 9anime video pages
// @author       Kiang Kuang
// @include      *9anime.*/watch/*
// @include      https://www.google.com/url?q=*
// ==/UserScript==

(() => {
  /* search btnI not working
  const redirect = 'https://www.google.com/url?q=';
  if (window.location.href.startsWith(redirect)) {
    window.location = new URL(window.location.href).searchParams.get('q');
  }
  */

  const $ = unsafeWindow.jQuery;

  const e = $('<a href="#" target="_blank" class="ctrl"><i class="fab fa-reddit"></i> Reddit</a>');
  $('#controls .left').prepend(e);

  e.hover(() => {
    const title = $('#w-info .title').text().replace('(TV)', '').replace(/-/g, ' ');
    const epi = $('#w-servers .tip > div:first-child > b').text();
    const href = `https://www.google.com/search?q=site:reddit.com/r/anime ${title} ${epi} discussion`;
    e.attr('href', href);
  });
})();
