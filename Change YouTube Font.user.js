// ==UserScript==
// @name        Change YouTube Font
// @match       *://*.youtube.com/*
// ==/UserScript==

const css = `
body {
    font-family: Verdana, sans-serif !important;
    font-size: 14px !important;
}`;

const style = document.createElement('style');
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
