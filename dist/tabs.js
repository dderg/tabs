// Element.closest polyfill
((e) => {
    e.closest || assign();
    function assign() {
        e.closest = function closest(css) {
            return this.parentNode ? (this.matches(css) ? this : closest.call(this.parentNode, css)) : null;
        };
    }
})(Element.prototype);

class Tab {
    /**
     * @param  {Tabs}   tabs   Instance of Tabs which contains this tab
     * @param  {Dom}    toggle toggle button
     * @param  {Dom}    tab    block to hide or show
     */
    constructor (tabs, toggle, tab) {
        this.tabs = tabs;
        this.toggle = toggle;
        this.tab = tab;
        this.src = this.tab.getAttribute('data-src');
        if (this.src !== null) {
            this.hasToBeLoaded = true;
        }

        if (this.toggle.classList.contains(this.tabs.activeToggleClassName)) {
            this.open();
        } else {
            this.close();
        }
        this.init();
    }

    init () {
        this.open = this.open.bind(this); // needed for removeEventListener
        this.toggle.addEventListener('click', this.open);
    }

    load () {
        // @todo: use fetch() function
        let xhr = new XMLHttpRequest();
        this.hasToBeLoaded = false;
        xhr.open('GET', encodeURI(this.src));
        xhr.onload = () => {
            if (xhr.status === 200 || xhr.status === 304) {
                this.tab.innerHTML = xhr.responseText;
            } else {
                this.hasToBeLoaded = true;
            }
        };
        xhr.onerror = (error) => {
            console.error(error);
        };
        xhr.send();
    }

    open () {
        if (this.tabs.active === this) {
            // already open
            return;
        }
        if (this.hasToBeLoaded) {
            this.load();
        }
        if (this.tabs.active) {
            this.tabs.active.close();
        }
        this.tabs.active = this;
        this.tab.style.display = `block`;
        this.toggle.classList.add(this.tabs.activeToggleClassName);
    }

    close () {
        this.tab.style.display = `none`;
        this.toggle.classList.remove(this.tabs.activeToggleClassName);
    }

    destroy () {
        this.toggle.removeEventListener('click', this.open);
    }
}

export class Tabs {
    constructor (container, blockClassName = `tabs`) {
        this.container = container;
        this.setClassNames(blockClassName);
        this.init();
    }

    init () {
        const filter = element => element.closest(`.${this.blockClassName}`) === this.container;
        this.toggles = Array.from(this.container.querySelectorAll(this.toggleSelector)).filter(filter);
        this.tabs = Array.from(this.container.querySelectorAll(this.tabSelector)).filter(filter);
        this.initedTabs = [];
        if (!this.isEverythingOk()) {
            return;
        }

        for (let index = 0; index < this.toggles.length; index++) {
            let tab = new Tab (this, this.toggles[index], this.tabs[index]);
            this.initedTabs.push(tab);
        }
    }

    /**
     * Initializes classes and selectors for blocks
     * @param {String} blockClassName 'tabs' by default
     */
    setClassNames (blockClassName) {
        this.blockClassName = blockClassName;
        this.toggleSelector = `.${blockClassName}__toggle`;
        this.tabSelector = `.${blockClassName}__tab`;
        this.activeToggleClassName = `${blockClassName}__toggle_active`;
    }

    isEverythingOk () {
        if (this.toggles.length !== this.tabs.length) {
            console.warn(`Tabs toggles and tabs amounts are not matching`);
            return false;
        } else if (this.toggles.length === 0) {
            console.warn(`There's no toggles for tabs`);
            return false;
        } else if (this.tabs.length === 0) {
            console.warn(`There's no content tabs`);
            return false;
        }
        return true;
    }

    destroy () {
        var tab;
        while (tab = this.initedTabs.pop()) {
            tab.destroy();
        }
    }
}

/**
 * iterates through all matched blocks and initializes tabs classes
 * @param  {String} config selector for tabs
 * @param  {Object} config {
 *                             selector: selector for tabs
 *                             blockClassName: block className (read more about _bem)
 *                         }
 */
export default function initTabs(config) {
    var selector;
    if (typeof config === `string`) {
        selector = config;
    } else {
        var {selector, blockClassName} = config; // doesn't work without 'var'
    }
    for (let container of document.querySelectorAll(selector)) {
        let tabs = new Tabs(container, blockClassName);
    }
}
