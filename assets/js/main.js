function toggleMenu() {
    const toggle = document.querySelector('.close-menu').checked;
    toggle.addEventListener('click', e => {
        toggle = false;
    });
}

toggleMenu();