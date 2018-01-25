# BS Docs

## Elements

  1. Buttons
  2. Links
  3. Inputs
  4. Lables
  5. Lists
  6. Headings
  7. Paragraphs
  8. Images

### 1 Buttons

#### 1.1 Generic Buttons

Generic buttons can be anchor tags buttons divs or any other kind of tag. The size of buttons can be adjusted by adding a size.

```html
<!-- generic button -->
  <button class="bs-btn">Click Here</button>

<!-- generic button with a large size -->
  <button class="bs-btn bs-lrg">Click Here</button>
```

["See it on CodePen"]()

#### 1.2 Icon Buttons

Icon buttons are meant for small icon images like social media links

````html 
 <a class="bs-btn__ico" href="#">
   <img class="bs-img__ico" src="#">
 </a>
````
["See it on CodePen"]()

#### 1.3 Long Buttons

Long buttons are an alternative to normal buttons. They are just wider.

````html
<button class="bs-btn__lng">Click Here</button>
````
["See it on CodePen"]()

#### 1.4 Full Buttons

Full buttons take up the entire width of the container however. They are not up to par like the other buttons.

````html
<button class="bs-btn__ful"></button>
````
Not avaliable on CodePen yet

### 2 Links

We already have covered that links can be given the button class. Now lets dive into some of the other link types avaliable with Beautiful Site.

#### 2.1 Textual Links

These links go right into a paragraph or any block of text.

````html
<p class="bs-par">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <a class="bs-lnk__txt" href="#">magna</a> aliqua. Ut enim ad minim <a class="bs-lnk__txt" href="#">veniam</a>, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
````
["See it on CodePen"]()

#### 2.2 Wrap Links

#### 2.3 Heading Links

 
## Components

  1. Media
  2. Card
  3. Alert

### Card Component

The Card Component markup

#### Main Card

```html

<figure class="bs-card bs-space">
  <div class="bs-card--img-container">
    <img class="bs-card--img" src="#">
  </div>
  <figcaption class="bs-card--container">
    <header class="bs-card--hdr">
      <h3 class="bs-mdm bs-h3">Card Heading</h3>
    </header>
    <div class="bs-card--body">
      <p class="bs-space__top-bot bs-p">This is some caption text for the card</p>
      <button class="bs-btn bs-mid">Link</button>
    </div>
    <footer class="bs-card--ftr">
      <p class="bs-small bs-p">Footer Content</p>
    </footer>
  </figcaption>
</figure>
    
```

### Media Component

The Media component markup is as follows

```html

<a class="bs-media--wrapper">
  <figure class="bs-media">
    <img class="bs-media--img" src="#" alt="Mountain Area">
    <figcaption class="bs-label--txt">
      <h3 class="bs-media--heading">Label Title</h3>
      <span class="bs-media--date">1/16/2018</span>
      <p>
          Bacon ipsum dolor amet swine landjaeger andouille ground round, turducken shoulder buffalo beef ribs ham hock sausage cow meatloaf beef.
      </p>
    </figcaption>
  </figure>
</a>

```

### Alert Component

Alert Component markup

```html

```

## Layout Components

  1. Header
  2. Nav
  3. Footer
  4. Section

### Header Component

Header Component markup

```html

<header class="bs-hdr__sml">
  <div class="bs-logo__sml-txt">
    <a class="bs-logo__sml-txt--link" href="#">Text Logo</a>
    <div class="bs-nav--btn--panel" id="js-menu-btn">
      <div class="bs-nav--btn"></div>
    </div>
  </div>
  <nav class="bs-nav" id="js-bs-nav">
    <ul class="bs-nav--item-list">
      <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
      <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
      <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
      <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
      <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
    </ul>
  </nav>
</header>

```

### Nav Component

Nav Component markup

```html
<nav class="bs-nav" id="js-bs-nav">
  <ul class="bs-nav--item-list">
    <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
    <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
    <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
    <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
    <li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
  </ul>
</nav>
```

### Footer Component

Footer Component markup

```html
```

### Section Component

Section Component markup

```html

<section class="bs-s__sml"></section>

```