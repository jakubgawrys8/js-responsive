const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

// Display mobile menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

function findTop(element) {
  var rec = document.getElementById(element).getBoundingClientRect();
  return rec.top + window.scrollY;
}

const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const servicesMenu = document.querySelector("#services-page");
  let scrollPos = window.scrollY;

  // adds 'highlight' class to menu items
  if (window.innerWidth > 960 && scrollPos < findTop("about")) {
    homeMenu.classList.add("highlight")
    aboutMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return;
  } else if (window.innerWidth > 960 && scrollPos >= findTop("about") && scrollPos < findTop("services")) {
    homeMenu.classList.remove('highlight')
    aboutMenu.classList.add("highlight")
    servicesMenu.classList.remove('highlight')
    return;
  } else if (window.innerWidth > 960 && scrollPos >= findTop("services") && scrollPos < findTop("sign-up")) {
    aboutMenu.classList.remove('highlight')
    servicesMenu.classList.add("highlight")
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// Close mobile Menu when clicking on mobile item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    
    if(menuBars) {
        mobileMenu()
    }
}

menuLinks.addEventListener('click', hideMobileMenu)

window.addEventListener('resize', () => {

    const mobileMenuBars = document.querySelector('.is-active')
    const mobileMenuIcon = document.querySelector('.active')

    if(mobileMenuBars || mobileMenuIcon) {
        console.log(mobileMenuBars.classList)
        mobileMenuBars.classList.remove("is-active");
        mobileMenuIcon.classList.remove("active");
    }
})