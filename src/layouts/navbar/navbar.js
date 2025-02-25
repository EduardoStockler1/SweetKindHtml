class NavBar extends HTMLElement {
    connectedCallback() {
        fetch('/src/layouts/navbar/navbar.html')
        .then(element => element.text())
        .then(component => this.innerHTML = component);
    }
}

window.customElements.define('nav-bar', NavBar);