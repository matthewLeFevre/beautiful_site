# BS Config

## Variables
There are lots of ways that you can use BS. One key way of using it is in development. You can can use all of the custom mixins and variables to create your own classes or styles to apply in your webpage.

** Variables ** can be found in the _config.scss_ file.

## Mixins

Handy mixins are avaliable for your own development as well. All of these are found in the _mixin.scss_ file.

I will do my best to document each mixin however if you do already know how to code in sass I don't know if these will be very handy for you.

### Handy Mixins

** flex-c ** include makes that element a flex container. Inside of the include you can automatically assign row or column for axis, wrap or no wrap, any justify content value for $justify, and the same for the $align.

    @include flex-c ($axis, $wrap: nowrap, $justify, $align);
