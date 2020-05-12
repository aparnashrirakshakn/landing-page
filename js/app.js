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

// add scroll event listener 
window.addEventListener('scroll', scrollEventListener);

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

function makePreviousActiveClassInactive() {
    document.getElementsByClassName('active')[0].classList.remove('active');
    document.getElementsByClassName('item-active')[0].classList.remove('item-active');
}

function getSection(innerHTMLText) {
    return sectionsList.filter(section => section.getAttribute('data-nav') === innerHTMLText)[0];
}

function listItemClickEventListener(event) {
    // get section and scroll into view
    const scrollToSection = getSection(event.target.innerHTML);
    scrollToSection.scrollIntoView({
        behavior: 'smooth'
    });

    // make all the sections and list items inactive
    makePreviousActiveClassInactive();

    // make the scroll to section active
    scrollToSection.classList.add('active');
    
    // make navbar list item active
    event.target.classList.add('item-active');
    
}

function scrollEventListener(event) {
    
    // check if the section is in viewport, and make the section and navbar list item active if it is
    sectionsList.forEach(section => {
        if(isInViewport(section)) {
            // make all the sections inactive
            makePreviousActiveClassInactive();
            
            // mark section active and make navbar list item active
            section.classList.add('active');
            
            // // make navbar list item active
            const listItemId = `list${section.id.substr(7)}`;
            document.getElementById(`${listItemId}`).classList.add('item-active');
        }
        else {
            return;
        }
    })
    
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
    sectionsList.forEach((section, index) => {
        const listItem = document.createElement('li');
        listItem.id = `list${index+1}`;
        listItem.innerText = section.dataset.nav;
        listItem.className = section.id === 'section1' ? 'menu__link item-active' : 'menu__link';
        listItem.onclick = listItemClickEventListener;
        navbarList.appendChild(listItem);
    });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavbarMenu();




