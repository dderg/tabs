# Tabs module for es6
[![npm download count](https://img.shields.io/npm/dm/future-tabs.svg?style=flat)](https://www.npmjs.org/package/future-tabs)
[![Current tag](https://img.shields.io/npm/v/future-tabs.svg?style=flat)](https://www.npmjs.org/package/future-tabs)
[![Current tag](https://img.shields.io/bower/v/future-tabs.svg?style=flat)](https://github.com/prog666/tabs)
[![Issues closed](http://issuestats.com/github/prog666/tabs/badge/issue?style=flat)](http://issuestats.com/github/prog666/tabs)

## Requirements
* if you want ES5 support you have to use [babel](https://babeljs.io/) or [browserify](http://browserify.org/) with [babelify extension](https://github.com/babel/babelify)

## Features
* Nested tabs
* Lazy load
* No dependencies
* ES2015 support (use babel)

if you need IE9 support, it should work (i didn't test yet) with [classList polyfill](https://github.com/eligrey/classList.js/)

[simple demo](http://front-end.fmake.ru/future-tabs/examples/)


## Install
### npm
```bash
npm i -S future-tabs
```
### bower
```bash
bower i -S future-tabs
```

## Markup
group tabs with `tabs` block, internal structure does not matter
```html
<div class="tabs">
	<div class="tabs__toggle tabs__toggle_active">tab 1</div>
	<div class="tabs__toggle">tab 2</div>
	<div class="tabs__tab">tab 1 content</div>
	<div class="tabs__tab">tab 2 content</div>
</div>
```

## Lazy Load
```html
<div class="tabs">
	<div class="tabs__toggle tabs__toggle_active">tab 1</div>
	<div class="tabs__toggle">tab 2</div>
	<div class="tabs__tab">tab 1 content</div>
	<div class="tabs__tab" data-src="path/to/contentToBeLoaded">preloader</div>
</div>

```

## Simple usage
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

## Extended usage
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

## Destroy
```javascript
const tabs = new Tabs(DOMElement);
tabs.destroy();
```
if you want to init again just do
```javascript
tabs.init();
```

## If you don't use commonjs build system (like browserify or webpack) you should add this before script
```html
<script>
	var module = {exports: {}};
	var exports = module.exports;
</script>
```

## Build
```bash
gulp
```

## todo
- tests

## Changelog

### 1.3.2
- add destroy method #5

### 1.3.0
- add nested tabs

### 1.2.1
- xhr error output to console

### 1.2.0
- add lazy load

#### 1.1.0
- block class name (prefix) can be set

#### 1.0.0
- you are welcome to use it and contribute
