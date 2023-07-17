class  Main extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="info-bar">
                <section class="breadcrumbs">
                    <a href="#" class="breadcrumbs__link">Facebook posts</a>
                    <i class="fas fa-angle-right breadcrumbs__icon"></i>
                    <span class="breadcumbs__name">Happy-huor-friday</span>
                </section>
                <button class="button">publish</button>
            </div>
            <div class="artboard">
                <section class="canvas">
                    <img class="canvas__bg-img" src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=2134&q=100" alt="Background image">
                    <img class="canvas__fg-img" src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=1453&q=85" alt="Foreground image">
                    <div class="canvas__circle"></div>
                    <div class="canvas__circle"></div>
                    <div class="canvas__circle"></div>
                    <div class="canvas__circle"></div>
                </section>
                <section class="tools">
                    <button class="tool">
                        <i class="fas fa-crop-alt tool__icon"></i>
                    </button>
                    <button class="tool tool--active">
                        <i class="fas fa-object-group tool__icon"></i>
                    </button>
                    <button class="tool">
                        <i class="fas fa-pen tool__icon"></i>
                    </button>
                    <button class="tool">
                        <i class="fas fa-trash tool__icon"></i>
                    </button>
                </section>
            </div>
        `
    }
}
customElements.define('my-main', Main)