define([
    'tippyjs',
    'domReady!'
], function (tippyjs) {
    'use strict';

    tippyjs(document.querySelectorAll('.tooltip.wrapper'), {
        content: (el) => el.querySelector('.tooltip-content')?.innerHTML
    })
});
