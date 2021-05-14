/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [
        'js/tooltip'
    ],
    paths: {
        'popperjs': 'https://unpkg.com/@popperjs/core@2.9.2/dist/umd/popper.min',
        'tippyjs': 'https://unpkg.com/tippy.js@6.3.1/dist/tippy-bundle.umd.min',
    },
    shim: {
        'tippyjs': ['popperjs'],
    },
};
