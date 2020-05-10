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
let numberOfSections = 0;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavbarMenu(){
    sectionsList.forEach(section => {
        numberOfSections++;
        const listItem = document.createElement('li');
        listItem.innerText = section.dataset.nav;
        listItem.className = 'menu__link';
        listItem.onclick = () => scrollTo($(`#${section.id}`));
        navbarList.appendChild(listItem);
        });
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollTo(target) {
    $('html,body').animate({
    scrollTop: target ? target.offset().top + (-(50 * numberOfSections)) : 0
    }, 'slow');
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbarMenu();

// Scroll to section on link click

// Set sections as active
