const burger = document.querySelector(".burger");
const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');
const rightnav = document.querySelector('.rightNav');
burger.addEventListener('click', () => {
    navlist.classList.toggle('visibility')
    rightnav.classList.toggle('visibility')
    navbar.classList.toggle('h-nav')
})