# Magento 2 Blank

This is a custom blank theme for Magento 2.4.

This theme uses PostCSS so we can access some new CSS features in our current browsers.<br>
In the future everything could be converted to pure CSS.

### Variables

All the LESS variables are now CSS variables.<br>
Mixins should use them as much as possible to avoid duplicate code.

> The **lib-css** mixin is not available.

### Gradients

Removed to make code more readable.<br>
Might re-implement them later if necessary.

> The **lib-gradient** mixin is not available.

### Colors

Color variations are handled using `rgba()`, this is a temporary fix tho.<br>
The css property `filter` should make a better job at this.

### Font-size

The font sizes are meant to be responsive.<br>
To avoid variables for each breakpoint, use the `clamp` function.

> The **lib-font-size** mixin is not available.

### Responsiveness

The responsiveness of the theme should not matter on the number of breakpoint it contains.

> The **.media-width** mixin could not be available.

### Email

Emails are not supported since CSS variables are not working in most of the major web clients.

### Prefixes

Property prefixes should be added with any preprocessor if needed.<br>
E.g: `-webkit-*` or `-moz-*`
