var toggle = document.querySelector('.btn-container');
toggle.addEventListener('click', function () {
    document.querySelector('.toggle-button').classList.toggle('toggle-button--close');
    document.querySelector('.navbar__group').classList.toggle('navbar__group--toggle');
});
//scroll event
var navBar = document.querySelector('.navbar');
var navBarItem = document.querySelectorAll('.navbar__item');
window.addEventListener('scroll', function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scroll);
    menuActive(scroll);
    navbarEffect(scroll);
    lazyLoading(scroll);
});

// after page loading
window.addEventListener('load', function () {
    document.querySelector('.hero__title').classList.add('loaded');
    document.querySelector('.hero__subtitle').classList.add('loaded');
});

function menuActive(scroll) {
    for (var i = 0; i < navBarItem.length; i++) {
        navBarItem[i].classList.remove('navbar__item--active');
    }
    if (scroll < 400) {
        navBarItem[0].classList.add('navbar__item--active');
    }
    if (scroll >= 400 && scroll < 1000) {
        navBarItem[1].classList.add('navbar__item--active');
    }
    if (scroll >= 1000 && scroll < 1800) {
        navBarItem[2].classList.add('navbar__item--active');
    }
    if (scroll >= 1800 && scroll < 2700) {
        navBarItem[3].classList.add('navbar__item--active');
    }
    if (scroll >= 2700 && scroll < 4300) {
        navBarItem[4].classList.add('navbar__item--active');
    }
    if (scroll >= 4300) {
        navBarItem[5].classList.add('navbar__item--active');
    }
}

function lazyLoading(scroll) {
    var aboutSection = document.querySelector('.section--about');
    var skillsGroup = document.querySelector('.skills__group');
    var hobbiesGroup = document.querySelector('.hobbies__group');
    var workContent = document.querySelectorAll('.work__content');
    var form = document.querySelector('.form-container');
    if (scroll > 100) {
        aboutSection.classList.add('loaded');
    }
    if (scroll > 700) {
        skillsGroup.classList.add('loaded');
    }
    if (scroll > 1500) {
        hobbiesGroup.classList.add('loaded');
    }
    if (scroll > 2700) {
        for (var i = 0; i < workContent.length; i++) {
            (function () {
                workContent[i].classList.add('loaded2');

            })();
        }
    }
    if (scroll > 4200) {
        form.classList.add('loaded');
    }
}

function navbarEffect(scroll) {
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
}

//  responsive
if (matchMedia) {
    var mq = window.matchMedia("(min-width: 1000px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
}

// media query change
function WidthChange(mq) {
    if (mq.matches) {
        var currNode = document.getElementsByClassName('skills__item')[4];
        var newNode = document.createElement('li');
        newNode.classList.add('skills__item');
        newNode.style.display = 'none';
        document.querySelector('.skills__group').insertBefore(newNode, currNode);
    } else {
        var removeNode = document.getElementsByClassName('skills__item')[4];
        if (removeNode.style.display === 'none') {
            removeNode.remove();
        }
    }
}