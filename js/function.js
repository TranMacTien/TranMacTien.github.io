var toggle = document.querySelector('.btn-container');
var section = document.getElementsByClassName('section');
toggle.addEventListener('click', function () {
    document.querySelector('.toggle-button').classList.toggle('toggle-button--close');
    document.querySelector('.navbar__group').classList.toggle('navbar__group--toggle');
});
//scroll event
var navBar = document.querySelector('.navbar');
var navBarItem = document.querySelectorAll('.navbar__item');
window.addEventListener('scroll', function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
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
    if (scroll < 375) {
        navBarItem[0].classList.add('navbar__item--active');
    }
    if (scroll >= 375 && scroll < (section[1].offsetTop - 52)) {
        navBarItem[1].classList.add('navbar__item--active');
    }
    if (scroll >= (section[1].offsetTop - 52) && scroll < (section[2].offsetTop - 52)) {
        navBarItem[2].classList.add('navbar__item--active');
    }
    if (scroll >= (section[2].offsetTop - 52) && scroll < (section[3].offsetTop - 52)) {
        navBarItem[3].classList.add('navbar__item--active');
    }
    if (scroll >= (section[3].offsetTop - 52) && scroll < (section[4].offsetTop - 52)) {
        navBarItem[4].classList.add('navbar__item--active');
    }
    if (scroll >= (section[4].offsetTop - 52)) {
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
    var mq1 = window.matchMedia("(min-width: 1000px)");
    var mq2 = window.matchMedia("(min-width:600px) and (max-width:999px)");
    var mq3 = window.matchMedia("(max-width:599px)");
    mq1.addListener(WidthChange1);
    mq2.addListener(WidthChange2);
    mq3.addListener(function () {
        if (mq3.matches) {
            removeNode();
        }
    });
    WidthChange1(mq1);
    WidthChange2(mq2);
}
// media query change
function WidthChange1(mq) {
    if (mq.matches) {
        removeNode();
        var currNode = document.getElementsByClassName('skills__item')[4];
        var newNode = document.createElement('li');
        newNode.classList.add('skills__item');
        newNode.style.display = 'none';
        document.querySelector('.skills__group').insertBefore(newNode, currNode);
    }
}

function WidthChange2(mq) {
    if (mq.matches) {
        removeNode();
        var skill = document.getElementsByClassName('skills__item');
        var currNode = [skill[2], skill[4], skill[6]];
        for (var i = 0; i < 3; i++) {
            (function () {
                var newNode = document.createElement('li');
                newNode.classList.add('skills__item');
                newNode.style.display = 'none';
                var index = i;
                document.querySelector('.skills__group').insertBefore(newNode, currNode[index]);
            })();
        }
    }
}
// remove node display=none
function removeNode() {
    var removeNode = document.getElementsByClassName('skills__item');
    for (var i = 0; i < removeNode.length; i++) {
        if (removeNode[i].style.display === 'none') {
            removeNode[i].remove();
        }
    }
}



// scroll anchor link
function scrollWhenClick(section) {
    for (var i = 0, n = section.length; i <= n; i++) {
        (function () {
            var index = i;
            document.getElementsByClassName('navbar__link')[index].onclick = function (e) {
                e.preventDefault();
                if (index === 0) {
                    scrollTo(document.body, 0, 600);
                } else if (index === 1) {
                    scrollTo(document.body, 376, 600);
                } else {
                    scrollTo(document.body, section[index - 1].offsetTop - 50, 600);
                }
            }
        })();
    }
}

scrollWhenClick(section);

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;
    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}
//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};