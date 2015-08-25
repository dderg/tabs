class Tab {
    /**
     * @param  {Tabs}   tabs   Instance of Tabs which contains this tab
     * @param  {[type]} toggle toggle button
     * @param  {[type]} tab    block to hide or show
     */
    constructor (tabs, toggle, tab) {
        this.tabs = tabs;
        this.toggle = toggle;
        this.tab = tab;
        this.init();
    }
    init () {
        if (this.toggle.classList.contains('tabs__toggle_active')) {
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
        this.tab.style.display = 'block';
        this.toggle.classList.add('tabs__toggle_active');
    }
    close () {
        this.tab.style.display = 'none';
        this.toggle.classList.remove('tabs__toggle_active');
    }
}

export class Tabs {
    constructor (container) {
        this.container = container;
        this.init();
    }
    init () {
        this.toggles = this.container.querySelectorAll('.tabs__toggle');
        this.tabs = this.container.querySelectorAll('.tabs__tab');
        if (!this.isEverythingOk()) {
            return;
        }

        for (let index = 0; index < this.toggles.length; index++) {
            new Tab (this, this.toggles[index], this.tabs[index]);
        }
    }
    isEverythingOk () {
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
}

/**
 * iterates through all matched blocks and initializes tabs classes
 * @param  {String} selector selector for tabs
 */
export default function initTabs(selector) {
    for (let container of document.querySelectorAll(selector)) {
        new Tabs(container);
    }
}
