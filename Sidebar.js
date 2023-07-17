class Sidebar extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <section class="menu">
                <button class="menu__button .fade-in-from-left">
                    <i class="fas fa-layer-group meue__icon">
                    </i>
                    <span class="menu__text">Templetes</span>
                </button>
                <button class="menu__button .fade-in-from-left menu__button--active">
                    <i class="fas fa-image meue__icon">
                    </i>
                    <span class="menu__text">Images</span>
                </button>
                <button class="menu__button .fade-in-from-left">
                    <i class="fas fa-font meue__icon">
                    </i>
                    <span class="menu__text">Text/Font</span>
                </button>
                <button class="menu__button .fade-in-from-left">
                    <i class="fas fa-shapes meue__icon">
                    </i>
                    <span class="menu__text">Shapes</span>
                </button>
            </section>
            <footer class="footer">
                <small class="copyright">&copy; 2023 SocialEditor. All rights reserved</small>
            </footer>
        `
    }
}
customElements.define('my-sidebar', Sidebar)