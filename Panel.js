class Panel extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <div class="panel__top">
                <h1 class="first-heading">Images</h1>
                <i class="fas fa-angle-double-left panel__collapse-icon"></i>
            </div>
            <div class="panel__images">
                <img class="panel__img"
                    src="https://images.unsplash.com/photo-1543096222-72de739f7917?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&fit=crop&w=280&q=100"
                    alt="Uploaded image">

                <img class="panel__img"
                    src="https://images.unsplash.com/photo-1475598322381-f1b499717dda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&h=280&q=100"
                    alt="Uploaded image">

                <img class="panel__img"
                    src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100"
                    alt="Uploaded image">

                <img class="panel__img"
                    src="https://images.unsplash.com/photo-1615749190340-34c7c3b16784?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100"
                    alt="Uploaded image">
                    

                <img class="panel__img"
                    src="https://images.unsplash.com/photo-1615707547992-93435f1e7f13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&fit=crop&w=280&q=100"
                    alt="Uploaded image">

                <button class="panel__btn">
                    <i class="fas fa-plus panel__update-icon">
                        
                    </i>
                </button>
            </div>
        `
    }
}
customElements.define('my-panel', Panel)