require('babelify/polyfill');

import initTabs from 'future-tabs';

initTabs('.tabs');
initTabs({
    selector: '#customSelector',
    blockClassName: 'customBlock'
});
initTabs({
    selector: '.anotherCustomSelector'
});
