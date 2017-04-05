# BS Headers

There is currently only one header option avaliable in BS but more are coming soon! I haven't named this header yet but it it very simple. Here is an explanation with code as well as an example!

**note: This also explains navigation as well!**
__ This is because headers and navigation are closely related __


## Simple Header

This is the first header that I have created for BS. It includes navigation inside of the header tag

### HTML Code

Pay attention to the classes used!

```
<header class="simple-header sb">
    <a href="#" class="txt-logo sb">Test App</a>
    <nav class="simple-nav">
        <img src="images/drag.svg" class="n-image">
        <ul class="n-bar">
            <li class="n-bar-itm"><a href="#" class="n-bar-a">Blog</a></li>
            <li class="n-bar-itm"><a href="#" class="n-bar-a">Portfolio</a></li>
            <li class="n-bar-itm"><a href="#" class="n-bar-a">Home</a></li>
            <li class="n-bar-itm"><a href="#" class="n-bar-a">Login</a></li>
        </ul>
    </nav>
</header>
```

## Images of outcome

### Mobile Header
![alt-text][h-m]

### Mobile Header Active
![alt-text][h-m-a]

To create this drop down I use JQuery in order to implement this in your website if you are using BS add in the following code to you javascript file and don't forget to also include the JQuery CDN

#### Here is the JQuery code

```

var main_drop = $('.n-image');

main_drop.click(function(){

    $('.n-bar').slideToggle(200);

});

```

### Tablet-Desktop Header
![alt-text][h-t-d]

### Tablet-Desktop Header Active
![alt-text][h-t-d-a]

When hovering over links on the navbar/header they turn white and the text turns black this is done with CSS and not with javascript.


## Top Header

Top header works well with a large logo!

### HTML Code

Pay attention to the classes used!

```
<header class="top-header sb">
  <a href="#" class="txt-logo sb">Test App</a>
  <img src="images/drag.svg" class="bn-image">
</header>

<nav class="bottom-nav">
  <ul class="n-bar">
    <li class="n-bar-itm"><a href="#" class="n-bar-a">Blog</a></li>
    <li class="n-bar-itm"><a href="#" class="n-bar-a">Portfolio</a></li>
    <li class="n-bar-itm"><a href="#" class="n-bar-a">Home</a></li>
    <li class="n-bar-itm"><a href="#" class="n-bar-a">Login</a></li>
  </ul>
</nav>

```

## Images of outcome

### Mobile Header
![alt-text][th-m]

### Mobile Header Active
![alt-text][th-ma]

To create this drop down I use JQuery in order to implement this in your website if you are using BS add in the following code to you javascript file and don't forget to also include the JQuery CDN

#### Here is the JQuery code

...none yet...

### Tablet-Desktop Header
![alt-text][th-td]

### Tablet-Desktop Header Active
![alt-text][th-tda]

When hovering over links on the navbar/header they turn white and the text turns black this is done with CSS and not with javascript.



[h-m]: https://github.com/matthewLeFevre/beautiful_site/blob/master/test/images/header_mobile.JPG 'Header Mobile'
[h-m-a]: https://github.com/matthewLeFevre/beautiful_site/blob/master/test/images/header_mobile_active.JPG 'Header Mobile Active'
[h-t-d]: https://github.com/matthewLeFevre/beautiful_site/blob/master/test/images/header_tablet-desktop.JPG 'Header Tablet-Desktop'
[h-t-d-a]: https://github.com/matthewLeFevre/beautiful_site/blob/master/test/images/header_tablet-desktop_active.JPG 'Header Tablet-Desktop Active'

[th-m]: https://github.com/matthewLeFevre/beautiful_site/blob/master/test/images/th-mobile.JPG
[th-ma]: https://github.com/matthewLeFevre/beautiful_site/blob/master/test/images/th-mobile-active.JPG
[th-td]: https://github.com/matthewLeFevre/beautiful_site/blob/master/test/images/th-td.JPG
[th-tda]: https://github.com/matthewLeFevre/beautiful_site/blob/master/test/images/th-td-active.JPG
