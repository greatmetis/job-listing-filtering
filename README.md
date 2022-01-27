# Frontend Mentor - IP address tracker solution

![](src/design/desktop-preview.jpg)

This is a solution to the [Job Listing with filtering](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt/hub/job-listings-with-filtering-W0RIxlNyB).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
  - screen size: Mobile: 375px; Desktop:1440px
- Click the languaes & skill tags to filter the results
- Hover the elements to see the effects

### Screenshot

![](src/design/desktop-design.jpg)
![](src/design/mobile-with-filters.jpg)

### Links

- [Solution page on FM](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt/hub/job-listings-with-filtering-W0RIxlNyB)
- [Live demo](https://greatmetis.github.io/job-listing-filtering/)

## My process

### Built with

- Mobile-first workflow
- Tailwind CSS -css framework
- Vue-Cli - with option API

### What I learned

This is my first project built with Tailwind CSS. I was struggling with building [JIT Mode](https://v2.tailwindcss.com/docs/just-in-time-mode) for Tailwind CSS.

Please see the code snippets below for my solution:
_Note: JIT mode was not working in my code, because I didn't add an extra code to automatically detect my code._

```js
// In tailwind.config.js, add mode into it
{mode:'jit',}

// In package.json
"scripts": {
    "serve": "TAILWIND_MODE=watch vue-cli-service serve",
    "build": "TAILWIND_MODE=build vue-cli-service build"
  },
```

### Continued development

- creating animation with Tailwind CSS for better transition when the languaes or skills are selected.

- using `svg-sprite-loader` to create svg in Vue, which would allow me to create dynamic svg. See the resources below

### Useful resources

- [clever use of svg icon in Vue](https://medium.com/@f820602h/%E5%9C%A8-vue-%E8%81%B0%E6%98%8E%E4%BD%BF%E7%94%A8-svg-icon-87a172a1b47b#:~:text=svg%20%E6%AA%94%E3%80%82,%E5%8F%AF%E4%BB%A5%E9%9A%A8%E5%BF%83%E6%89%80%E6%AC%B2%E7%9A%84%E6%94%B9%E8%AE%8A%E9%A1%8F%E8%89%B2%EF%BC%81) - This helped me for adding company svg icons dynamically. I really liked the plugin and methods and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Frontend Mentor - [@greatmetis](https://www.frontendmentor.io/profile/greatmetis)

## Acknowledgments

I would like to acknowledge

- [Tim Lin](https://github.com/TimmyLin21): solution of JIT Mode is given by this fellow developer.
