/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sectionsList = [...document.getElementsByTagName('section')];
let navbarList = document.getElementById('navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function listItemClickEventListener(event) {
    
}

// this helper function has been borrowed from https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/
let isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbarMenu(){
    sectionsList.forEach(section => {
        const listItem = document.createElement('li');
        listItem.innerText = section.dataset.nav;
        listItem.className = 'menu__link';
        listItem.onclick = listItemClickEventListener;
        navbarList.appendChild(listItem);
    });
}

// Add class 'active' to section when near top of viewport


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbarMenu();

// Scroll to be on the first section
scrollTo();



