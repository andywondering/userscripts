// ==UserScript==
// @name         Be Square and no animation
// @match        *://*.youtube.com/*
// @match        *://*.voz.vn/*
// @match        *://*.fpt.edu.vn/*
// @match        *://*.coursera.org/*
// @match        *://*.reddit.com/*
// @match        *://*.gitlab.com/*
// @match        *://*.one.dash.cloudflare.com/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle(`
    *,
    *:before,
    *:after {
        border-radius: unset!important;
        box-shadow: unset!important;
        text-shadow: unset!important;
        text-transform: unset!important;
        scroll-behavior: unset!important;
        backdrop-filter: unset!important;
        filter: unset!important;
        animation-timing-function: step-start !important;
        transition-timing-function: step-start !important;
        /*CSS transitions*/
        transition-property: none !important;
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
        text-rendering:none!important;
    }
`);
