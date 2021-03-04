/*Navbar*/
const navShowButton= document.querySelector('.nav-show');
const navCloseButton = document.querySelector('.nav-close');
const dropdownToggleButton = document.querySelector('.dropdown-toggle');
const dropdownLinks = document.querySelectorAll('.dropdown__link');
const nav = document.querySelector('nav');
const body = document.body;
  

const handlers = {
  showNav: function () {
    nav.classList.toggle('visible');
    body.classList.add('unscroll');
  },

  closeNav: function () {
    nav.classList.remove('visible');
    body.classList.remove('unscroll');
  },

  toggleDropdown: function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle('dropdown-btn--clicked');
    const dropdown = this.parentElement.querySelector('.dropdown');
    dropdown.classList.toggle('exist');
    dropdownLinks.forEach(link => link.classList.add('be'));
  }
}

navShowButton.addEventListener('click', handlers.showNav);
navCloseButton.addEventListener('click', handlers.closeNav);
dropdownToggleButton.addEventListener('click', handlers.toggleDropdown);


/*scroll*/


function debounce(func, wait = 15, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
console.log(hero.offsetHeight);

  let lastScroll = 0;

  function comeAlive () {
    const currentScroll = window.pageYOffset;
    console.count(scroll);
    if(currentScroll > hero.offsetHeight - 100)
      header.classList.remove('scroll-down');
    else
      header.classList.add('scroll-down');
    
  }

window.addEventListener('scroll', debounce(comeAlive));