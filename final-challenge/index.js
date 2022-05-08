// javascript

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector('.nav-toggle');

// when someone clicks the hamburguer button

navToggle.addEventListener('click', () => {

// if the nav is closed, open it

    const visibility = nav.getAttribute("data-visible");

    if (visibility === 'false') {
        nav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});