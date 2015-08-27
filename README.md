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


[simple demo](http://front-end.fmake.ru/future-tabs/examples/)


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
import initTabs from 'future-tabs';
initTabs('.tabs');
```
or
```javascript
initTabs({
	selector: '.tabs',
	blockClassName: 'tabs' //optional
})
```

### extended usage
```javascript
import {Tabs} from 'future-tabs';
const tabs = new Tabs(document.querySelector('.tabs'));
```
or
```javascript
import {Tabs} from 'future-tabs';
const tabsDiv = document.getElementById('someCustomId');
new Tabs(tabsDiv, 'tabs'); // 'tabs' here is _bem block class name
```

### build
```bash
gulp
```

### todo
- tests

### changelog

#### 1.1.0
- block class name (prefix) can be set

#### 1.0.0
- you are welcome to use it and contribute
