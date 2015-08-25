## Tabs module for es6

no dependencies, if you need IE9 support, it should work (i didn't test yet) with [classList polyfill](https://github.com/eligrey/classList.js/)

if you need es5 support use tabs.es5.js version

use [browserify](http://browserify.org/) with [babelify extension](https://github.com/babel/babelify)

there's also [gulp version](https://github.com/deepak1556/gulp-browserify)



### install
```bash
npm i -S future-tabs
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

#### 1.0.0-alpha
- you are welcome to use it and contribute