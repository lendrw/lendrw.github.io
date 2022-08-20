toggleMenu();
typeWriter();
animeScroll();

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
            setTimeout(() => el.innerHTML += letra, 250 * i);
        });
    }

    const nameWrite = document.querySelector('.type-write');
    splitName(nameWrite);
}


function animeScroll() {

    const debounce = (func, wait, immediate) => {
        let timeout;
        return (...args) => {
            const context = this;
            const later = () => {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const target = document.querySelectorAll('[data-anime]');
    const animeClass = 'animate';

    function anime() {
        const windowTop = window.scrollY + (window.innerHeight * 3) / 4;
        target.forEach((el) =>{
            if((windowTop) > el.offsetTop) {
                el.classList.add(animeClass);
            } else {
                el.classList.remove(animeClass);
            }
        });
    }

    if(target.length) {
        window.addEventListener('scroll', debounce(() => {
            anime();
        }, 200));
    }
}