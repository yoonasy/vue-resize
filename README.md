# vue3-resize

[![npm](https://img.shields.io/npm/v/vue-resize.svg) ![npm](https://img.shields.io/npm/dm/vue-resize.svg)](https://www.npmjs.com/package/vue-resize)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Detect DOM element resizing

[Demo](https://akryum.github.io/vue-resize/) - [JSFiddle](https://jsfiddle.net/Akryum/zqygwf3r/)

<p>
  <a href="https://www.patreon.com/akryum" target="_blank">
    <img src="https://c5.patreon.com/external/logo/become_a_patron_button.png" alt="Become a Patreon">
  </a>
</p>

## Sponsors

[![sponsors logos](https://guillaume-chau.info/sponsors.png)](https://guillaume-chau.info/sponsors)

<br>

# Installation

```
npm install --save vue3-resize
```

## Module import

**⚠️ You need to include the package CSS:**

```js
import 'vue3-resize/dist/vue3-resize.css'
```

Then import the package and install it into Vue:

```javascript
import Vue from 'vue'
import Vue3Resize from 'vue3-resize'

Vue.use(Vue3Resize)
```

Or:

```javascript
import Vue from 'vue'
import { ResizeObserver } from 'vue3-resize'

Vue.component('resize-observer', ResizeObserver)
```

## Browser

```html
<link rel="stylesheet" href="vue3-resize/dist/vue3-resize.css"/>

<script src="vue.js"></script>
<script src="vue3-resize/dist/vue3-resize.min.js"></script>
```

The plugin should be auto-installed. If not, you can install it manually:

```javascript
Vue.use(Vue3Resize)
```

Or:

```javascript
Vue.component('resize-observer', Vue3Resize.ResizeObserver)
```

# Usage

Add the `<resize-observer>` inside a DOM element and make its position to something other than `'static'` (for example `'relative'`), so that the observer can fill it.

Listen to the `notify` event that is fired when the above DOM element is resized.

# Example

```html
<template>
  <div class="demo">
    <h1>Hello world!</h1>
    <resize-observer @notify="handleResize" />
  </div>
</template>

<script>
export default {
  methods: {
    handleResize ({ width, height }) {
      console.log('resized', width, height)
    }
  }
}
</script>

<style scoped>
.demo {
  position: relative;
}
</style>
```

---

## License

[MIT](http://opensource.org/licenses/MIT)
