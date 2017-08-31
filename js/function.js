var toggle = document.querySelector('.toggle-button');
toggle.addEventListener('click', function () {
    this.classList.toggle('toggle-button--close');
    document.querySelector('.navbar__group').classList.toggle('navbar__group--toggle');
});
/* media query */
var mq = window.matchMedia("screen and (min-width: 900px)");
mq.addListener(function () {
    if (this.matches) {
        document.querySelector('.wrapper').classList.remove('clearfix');
    } else {
        document.querySelector('.wrapper').classList.add('clearfix');
    }
});
var navBar = document.querySelector('.navbar');
var navBarItem = document.querySelectorAll('.navbar__item');
window.addEventListener('scroll', function () {
    var scroll = document.body.scrollTop;
    if (scroll > 20) {
        navBar.classList.add('navbar--collapse');
        for (var i = 0, n = navBarItem.length; i < n; i++) {
            navBarItem[i].classList.add('navbar__item--collapse');
        }
    } else if (scroll <= 20) {
        navBar.classList.remove('navbar--collapse');
        for (var i = 0, n = navBarItem.length; i < n; i++) {
            navBarItem[i].classList.remove('navbar__item--collapse');
        }
    }
});