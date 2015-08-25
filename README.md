## Tabs module for es6
[![github download count](https://img.shields.io/github/downloads/prog666/tabs/latest/total.svg?style=flat)](https://github.com/prog666/tabs)
[![npm download count](https://img.shields.io/npm/dm/future-tabs.svg?style=flat)](https://www.npmjs.org/package/future-tabs)
[![Current tag](https://img.shields.io/npm/v/future-tabs.svg?style=flat)](https://www.npmjs.org/package/future-tabs)
[![Current tag](https://img.shields.io/bower/v/future-tabs.svg?style=flat)](https://github.com/prog666/tabs)
[![Issues closed](http://issuestats.com/github/prog666/tabs/badge/issue?style=flat)](http://issuestats.com/github/prog666/tabs)

no dependencies, if you need IE9 support, it should work (i didn't test yet) with [classList polyfill](https://github.com/eligrey/classList.js/)

if you need es5 support use tabs.es5.js version

use [browserify](http://browserify.org/) with [babelify extension](https://github.com/babel/babelify)

there's also [gulp version](https://github.com/deepak1556/gulp-browserify)



### install
#### with npm
```bash
npm i -S future-tabs
```
#### with bower
```bash
bower i -S future-tabs
```

### markup
group tabs with `tabs` block, internal structure does not matter
```html
<div class="tabs">
	<div class="tabs__toggle tabs__toggle_active">tab 1</div>
	<div class="tabs__toggle">tab 2</div>
	<div class="tabs__tab">tab 1 content</div>
	<div class="tabs__tab">tab 2 content</div>
</div>
```

### simple usage
```javascript
import initTabs from 'tabs';
initTabs('.tabs');
```

### extended usage
```javascript
import {Tabs} from 'tabs';
tabs = new Tabs(document.querySelector('.tabs'));
```

### build
```bash
gulp
```

### todo
- tests
- class prefix as an option

### changelog

#### 1.0.0
- you are welcome to use it and contribute