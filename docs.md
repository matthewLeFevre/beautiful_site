# BS Docs

## Contents

### Elements

  1. [Buttons](#1-buttons)
  2. [Links](#2-links)
  3. [Inputs](#3-inputs)
  4. [Lables](#4-labels)
  5. [Lists](#5-lists)
  6. [Headings](#6-headings)
  7. [Paragraphs](#7-paragraphs)
  8. [Images](#8-images)

### Components

  1. [Cards](#cards)
  2. [Alerts](#alerts)
  3. [Modals](#modals)

### Layout
  1. [Headers](#1-headers)



## Elements



### 1 Buttons

#### 1.1 Generic Buttons

Generic buttons can be anchor tags buttons divs or any other kind of tag. The size of buttons can be adjusted by adding a size.

```html
<!-- generic button -->
  <button class="bs-btn">Click Here</button>

<!-- generic button with a large size -->
  <button class="bs-btn bs-lrg">Click Here</button>
```

[See it on CodePen]()

#### 1.2 Icon Buttons

Icon buttons are meant for small icon images like social media links

````html 
 <a class="bs-btn__ico" href="#">
   <img class="bs-img__ico" src="#">
 </a>
````
[See it on CodePen](https://codepen.io/MatthewLeFevre/pen/mpZjYN)

#### 1.3 Long Buttons

Long buttons are an alternative to normal buttons. They are just wider.

````html
<button class="bs-btn__lng">Click Here</button>
````
[See it on CodePen](https://codepen.io/MatthewLeFevre/pen/mpZjYN)

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
<p class="bs-par">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore <a class="bs-lnk__txt" href="#">magna</a> aliqua. Ut enim ad minim 
  <a class="bs-lnk__txt" href="#">veniam</a>, quis nostrud exercitation ullamco laboris 
  nisi ut aliquip ex ea commodo consequat.
</p>
````
**Examples Comming Soon**

#### 2.2 Wrap Links

Wrap links can surround any component that you would like to have the behavior 
of a link they can be used for cards, sections, and a variety of other components.

**Examples Comming Soon**

#### 2.3 Heading Links

Heading links are meant to make h1-h2 clickable links without effecting the headings
styles. Simple apply the link and set the href.

**Examples Comming Soon**

### 3 Inputs

#### 3.1 Text Inputs

Generic text inputs styled to be visually pleasing.

```html
<!-- Email -->
<div class="bs-form--set__align-left">
  <label for="" class="bs-lbl__txt bs-mdm">Email:</label>
  <input type="email" class="bs-ipt__txt bs-main" required>
</div>
<!-- Password -->
<div class="bs-form--set__align-left">
  <label for="" class="bs-lbl__txt bs-mdm">Password:</label>
  <input type="password" class="bs-ipt__txt bs-main" required>
</div>
<!-- Generic Text -->
<div class="bs-form--set__align-left">
  <label for="" class="bs-lbl__txt bs-mdm">Username:</label>
  <input type="text" class="bs-ipt__txt bs-main" required>
</div>
```

**Examples Comming Soon**

### 4 Labels

Labels are used in forms to give form inputs meaning and in some cases styling
Beautiful site has a variety of different label solutions.

**Examples Comming Soon**

### 5 Lists

#### 5.1 Basic List

Currently the only kind of list avaliable in BS.

````html
<ul class="bs-lst">
  <li class="bs-lst--item">Item 1</li>
  <li class="bs-lst--item">Item 2</li>
  <li class="bs-lst--item">Item 3</li>
  <li class="bs-lst--item">Item 4
    <ul>
      <li class="bs-lst--item__nst">Sub Item 1</li>
      <li class="bs-lst--item__nst">Sub Item 2</li>
    </ul>
  </li>
</ul>
````

**Examples Comming Soon**

### 6 Headings

#### 6.1 Primary Heading

````html

<h1 class=".bs-hed">Heading</h1>

````

#### 6.2 Secondary Heading

````html

<h2 class=".bs-hed_scd_">Heading</h2>

````

#### 6.3 Tertiary Heading

````html

<h3 class=".bs-hed__trd">Heading</h3>

````



### 7 Paragraphs

#### 7.1 Basic Paragraph

General formating for an all purpose paragraph tag.

````html

<p class="bs-par">Lorem ipsum dolor sit amet, consectetur
   adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua.</p>

````

#### 7.2 Summary Paragraph

Emphasis paragraph on key points in content. Stands out from other paragraph text.

````html

<p class="bs-par__summary">Lorem ipsum dolor sit amet, consectetur
   adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua.</p>

````

#### 7.3 Caption Paragraph

Functions as any kind of caption.

````html

<p class="bs-par__caption">Lorem ipsum dolor sit amet, consectetur
   adipiscing elit, sed do eiusmod tempor incididunt ut labore et
    dolore magna aliqua.</p>

````



### 8 Images

**Examples Comming Soon**

## Components

Components are more complex structures that in some cases impliment elements link
images and form inputs. Think of components as pre-built packages of html and css 
that are styled attractively.

### Cards

The Card Component markup

```html

<!-- Traditional -->
<div class="bs-c__panel bs-shadow">
  <img src="image path" alt="E" class="bs-c--img">
  <div class="bs-c--hdr">
      <h3 class="bs-hed bs-mdm">Card Title</h3>
  </div>
  <div class="bs-c--body">
      <p class="bs-par__caption">This is the card main content. Here are some extra words to add volume to the card.</p>
  </div>
  <div class="bs-c--ftr">
      <button class="bs-btn bs-small bs-success">Create</button>
      <button class="bs-btn bs-small bs-error">Delete</button>
  </div>
</div>

<!-- Video -->

<div class="bs-c__panel">
  <video class="bs-c--video" controls>
    <source src="video path">
  </video>
  <div class="bs-c--hdr">
    <h3 class="bs-hed bs-mdm">Card Title</h3>
  </div>
  <div class="bs-c--body">
      <p class="bs-par__caption">This is the card main content. Here are some extra words to add volume to the card.</p>
  </div>
  <div class="bs-c--ftr">
    <button class="bs-btn bs-small bs-success">Create</button>
    <button class="bs-btn bs-small bs-error">Delete</button>
  </div>
</div>

<!-- No Image -->

<div class="bs-c__panel">
  <div class="bs-c--hdr">
    <h3 class="bs-hed bs-mdm">Card Title</h3>
  </div>
  <div class="bs-c--body">
    <p class="bs-par__caption">This is the card main content. Here are some extra words to add volume to the card.</p>
  </div>
  <div class="bs-c--ftr">
    <button class="bs-btn bs-small bs-success">Create</button>
    <button class="bs-btn bs-small bs-error">Delete</button>
  </div>
</div>
```

**Examples Comming Soon**

### Media 

If you would like your media card to be a link in of itself without any smaller components inside of it being links then use the markup bellow.

**Warning: if you use internal links like anchor tag buttons the card will break. Look instead at variation two**

```html

<a class="bs-lnk__wrp..">
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

If you would like individual elements of your media card to be links then don't make the container a link. Instead use link tags on the individual pars.

```html

<div class="bs-media">
  <figure class="bs-media--body">
    <!-- Image Link -->
    <a class="bs-lnk__wrp" href="#">
      <img class="bs-media--img" src="#" alt="Mountain Area">
    </a>
    <figcaption class="bs-media--cnt">
      <!-- Heading Link -->
      <h3 class="bs-media--heading"> 
        <a class="bs-lnk__hed" href="#">Label Title</a>
      </h3>
      <span class="bs-media--date">1/16/2018</span>
      <p class="bs-media--txt">
          Bacon ipsum dolor amet swine landjaeger andouille ground round, turducken shoulder buffalo beef ribs ham hock sausage cow meatloaf beef.
      </p>
      <!-- Buttons will work -->
      <a class="bs-btn" href="#"></a>
    </figcaption>
  </figure>
</div>

```
[See it on CodePen]()

### Alert 

A single container holds all alerts

Alert Component markup

```html

<div class="bs-alert--container">
   <div class="bs-alert bs-success">
    <span class="bs-alert--msg">
      Success Alert
    </span>
    <div class="bs-alert--close"></div>
  </div>

  <div class="bs-alert bs-neutral">
    <span class="bs-alert--msg">
      Neutral Alert
    </span>
    <div class="bs-alert--close"></div>
  </div>
  
  <div class="bs-alert bs-error">
    <span class="bs-alert--msg">
      Error Alert
    </span>
    <div class="bs-alert--close"></div>
  </div>

  <div class="bs-alert">
    <span class="bs-alert--msg">
      Unspecified Alert
    </span>
    <div class="bs-alert--close"></div>
  </div>
</div>
```

## Layout Components

  1. Header
  2. Nav
  3. Footer
  4. Section

### 1 Headers

Header Component markup

#### Basic Header

Traditional mobile responsive headers with navigation. Has a hamburger menu through mobile device screen widths but relinquishes the mobile menu upon reaching desktop/laptop screen sizes.

```html

	<header class="bs-hdr__nav-right">
		<div class="bs-hdr--badge">
			<a class="bs-lnk__hed" href="#">Text Logo</a>
			<div class="bs-nav--btn-panel" id="js-menu-btn">
				<div class="bs-nav--btn"></div>
			</div>
		</div>
		<nav class="bs-nav--basic" id="js-bs-nav">
			<ul class="bs-nav--item-list">
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
			</ul>
		</nav>
	</header>

```
[See it on CodePen]()

#### Toggle Header

Identical to the basic header through mobile devices however in desktop/laptop screens the hamburger menu remains a toggle.

````html

	<header class="bs-hdr">
		<div class="bs-hdr--badge__toggle">
			<a class="bs-lnk__hed" href="#">Text Logo</a>
			<div class="bs-nav--btn-panel" id="js-menu-btn">
				<div class="bs-nav--btn"></div>
			</div>
		</div>
		<nav class="bs-nav--toggle" id="js-bs-nav">
			<ul class="bs-nav--item-list">
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
				<li class="bs-nav--item"><a class="bs-nav--link" href="">Item</a></li>
			</ul>
		</nav>
	</header>

````
[See it on CodePen]()



### Footer

Footer Component markup

```html
```

### Section

Section Component markup

```html

<section class="bs-s__sml"></section>

```