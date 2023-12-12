// function scrollToElement(elementSelector, instance = 0) {
//     // Select all elements that match the given selector
//     const elements = document.querySelectorAll(elementSelector);
//     // Check if there are elements matching the selector and if the requested instance exists
//     if (elements.length > instance) {
//         // Scroll to the specified instance of the element
//         elements[instance].scrollIntoView({ behavior: 'smooth' });
//     }
// }

// const link1 = document.getElementById("link1");
// const link2 = document.getElementById("link2");
// const link3 = document.getElementById("link3");

// link1.addEventListener('click', () => {
//     scrollToElement('.header');
// });

// link2.addEventListener('click', () => {
//     // Scroll to the second element with "header" class
//     scrollToElement('.header', 1);
// });

// link3.addEventListener('click', () => {
//     scrollToElement('.column');
// });

function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

const backToTopButton = document.getElementById('back-to-top');

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}