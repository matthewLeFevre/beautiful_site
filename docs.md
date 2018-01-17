# BS Docs

## Components

  1. Label
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

### Label Component

The Label component markup is as follows

```html

<a class="bs-label--wrapper">
  <figure class="bs-label">
    <img class="bs-label--img" src="#" alt="Mountain Area">
    <figcaption class="bs-label--txt">
      <h3 class="bs-label--heading">Label Title</h3>
      <span class="bs-label--date">1/16/2018</span>
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