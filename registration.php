<?php

use Magento\Framework\Component\ComponentRegistrar;

ComponentRegistrar::register(ComponentRegistrar::THEME, 'frontend/Ubermanu/blank', __DIR__);

// Load the theme as a module to have access to csp_whitelist.xml
// https://magento.stackexchange.com/a/330317
ComponentRegistrar::register(ComponentRegistrar::MODULE, 'Ubermanu_Blank', __DIR__);
