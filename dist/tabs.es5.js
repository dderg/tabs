'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

exports['default'] = initTabs;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Tab = (function () {
    /**
     * @param  {Tabs}   tabs   Instance of Tabs which contains this tab
     * @param  {[type]} toggle toggle button
     * @param  {[type]} tab    block to hide or show
     */

    function Tab(tabs, toggle, tab) {
        _classCallCheck(this, Tab);

        this.tabs = tabs;
        this.toggle = toggle;
        this.tab = tab;
        this.init();
    }

    _createClass(Tab, [{
        key: 'init',
        value: function init() {
            var _this = this;

            if (this.toggle.classList.contains('tabs__toggle_active')) {
                this.open();
            } else {
                this.close();
            }

            this.toggle.addEventListener('click', function () {
                _this.open();
            });
        }
    }, {
        key: 'open',
        value: function open() {
            if (this.tabs.active === this) {
                // already open
                return;
            }
            if (this.tabs.active) {
                this.tabs.active.close();
            }
            this.tabs.active = this;
            this.tab.style.display = 'block';
            this.toggle.classList.add('tabs__toggle_active');
        }
    }, {
        key: 'close',
        value: function close() {
            this.tab.style.display = 'none';
            this.toggle.classList.remove('tabs__toggle_active');
        }
    }]);

    return Tab;
})();

var Tabs = (function () {
    function Tabs(container) {
        _classCallCheck(this, Tabs);

        this.container = container;
        this.init();
    }

    /**
     * iterates through all matched blocks and initializes tabs classes
     * @param  {String} selector selector for tabs
     */

    _createClass(Tabs, [{
        key: 'init',
        value: function init() {
            this.toggles = this.container.querySelectorAll('.tabs__toggle');
            this.tabs = this.container.querySelectorAll('.tabs__tab');
            if (!this.isEverythingOk()) {
                return;
            }

            for (var index = 0; index < this.toggles.length; index++) {
                new Tab(this, this.toggles[index], this.tabs[index]);
            }
        }
    }, {
        key: 'isEverythingOk',
        value: function isEverythingOk() {
            if (this.toggles.length !== this.tabs.length) {
                console.warn('Tabs toggles and tabs amounts are not matching');
                return false;
            } else if (this.toggles.length === 0) {
                console.warn('There\'s no toggles for tabs');
                return false;
            } else if (this.tabs.length === 0) {
                console.wark('There\'s no content tabs');
                return false;
            }
            return true;
        }
    }]);

    return Tabs;
})();

exports.Tabs = Tabs;

function initTabs(selector) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = document.querySelectorAll(selector)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var container = _step.value;

            new Tabs(container);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
                _iterator['return']();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}