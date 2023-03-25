const navbarToggler = document.querySelector('.navbar-toggler');
navbarToggler.addEventListener('click',() => {
    navbarToggler.classList.toggle('change-icon');
    document.querySelector('.navbar-collpase').classList.toggle('show-navbar');
});