toggleMenu();
typeWriter();
animeScroll();
scrollSuave();
experienciaMenu();

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

function scrollSuave() {

    const menuItems = document.querySelectorAll('#menu-elements a[href^="#"]');
    
    menuItems.forEach(item => {
        item.addEventListener('click', scrollToIdOnClick);
    });

    function scrollToIdOnClick(e) {
        e.preventDefault();
        const to = getScrollTopByHref(e.target) - 80;

        scrollToPosition(to);
    }

    function scrollToPosition(to) {
        smoothScrollTo(0, to);
    }

    function getScrollTopByHref(element) {
        
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }

    /**
     * Smooth scroll animation
     * @param {int} endX: destination x coordinate
     * @param {int} endY: destination y coordinate
     * @param {int} duration: animation duration in ms
     */
    function smoothScrollTo(endX, endY, duration) {
        const startX = window.scrollX || window.pageXOffset;
        const startY = window.scrollY || window.pageYOffset;
        const distanceX = endX - startX;
        const distanceY = endY - startY;
        const startTime = new Date().getTime();
    
        duration = typeof duration !== 'undefined' ? duration : 400;
    
        // Easing function
        const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
        };
    
        const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
        }, 1000 / 60); // 60 fps
    };
}

function experienciaMenu() {
    const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
    const tabContent = document.querySelectorAll("[data-tab='content'] section");
  
    if (tabMenu.length && tabContent.length) {
      tabMenu[1].classList.add("active");
      tabContent[1].classList.add("active");
  
      function activeTab(index) {
        tabContent.forEach((content) => {
          content.classList.remove("active");
        });
        const direction = tabContent[index].dataset.anime;
        tabContent[index].classList.add("active", direction);
  
        tabMenu.forEach((content) => {
          content.classList.remove("active");
        });
        tabMenu[index].classList.add("active");
      }
  
      tabMenu.forEach((item, index) => {
        item.addEventListener("click", () => {
          activeTab(index);
        });
      });
    }
}