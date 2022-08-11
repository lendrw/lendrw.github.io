function toggleMenu() {

    const checkBox = document.querySelector('#close-menu');
    const menu = document.querySelector('#menu-elements');
    const logo = document.querySelector('#logo');

    menu.addEventListener('click', () => {
        checkBox.checked = false;
    });
    
    logo.addEventListener('click', () => {
        checkBox.checked = false;
    });
}

toggleMenu();


