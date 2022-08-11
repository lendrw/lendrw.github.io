toggleMenu();
typeWriter();

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


function typeWriter() {
    function splitName(el) {

        const textArray = el.innerHTML.split('');
        el.innerHTML = '';
        textArray.forEach((letra, i) => {
            setTimeout(() => el.innerHTML += letra, 200 * i);
        });
    }

    const nameWrite = document.querySelector('.type-write');
    splitName(nameWrite);
}