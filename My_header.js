class My_header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <img class="logo fade-in-from-top" src="https://bytegrad.com/course-assets/css/1/logo.svg" alt="Logo">
        <button class="dd-toggle fade-in-from-top">File</button>
        <button class="dd-toggle fade-in-from-top">View</button>
        <button class="dd-toggle fade-in-from-top">New</button>
        <button class="dd-toggle fade-in-from-top">
            <i class="fas fa-crown dd-toggle__icon"></i>
        </button>
        <button class="dd-toggle fade-in-from-top">
            <i class="fas fa-bell dd-toggle__icon"></i>
        </button>
        <button class="dd-toggle fade-in-from-top">
            <img src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/326313097_1152083692172649_5114155848126259385_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=gJyTa3_BKvQAX9vLeJE&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfAlfEgf3qHO37imKleqduvTCgTOUV_sRHcBWC7jAUurNA&oe=64B6AE62"
                alt="User Photo" class="dd-toggle__img">
            <span class="dd-toggle__text">Wael Melhem</span>
        </button>
        `
    }
}
customElements.define('my-header', My_header)