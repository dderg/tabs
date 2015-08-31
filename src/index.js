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
        this.init();
    }

    init () {
        if (this.toggle.classList.contains(this.tabs.activeToggleClassName)) {
            this.open();
        } else {
            this.close();
        }

        this.toggle.addEventListener('click', () => {
            this.open();
        });
    }

    open () {
        if (this.tabs.active === this) {
            // already open
            return;
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
}

export class Tabs {
    constructor (container, blockClassName = `tabs`) {
        this.container = container;
        this.setClassNames(blockClassName);

        this.init();
    }

    init () {
        this.toggles = this.container.querySelectorAll(this.toggleSelector);
        this.tabs = this.container.querySelectorAll(this.tabSelector);
        if (!this.isEverythingOk()) {
            return;
        }

        for (let index = 0; index < this.toggles.length; index++) {
            new Tab (this, this.toggles[index], this.tabs[index]);
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
        new Tabs(container, blockClassName);
    }
}
