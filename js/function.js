var toggle = document.querySelector('.toggle-button');
toggle.addEventListener('click', function () {
    this.classList.toggle('toggle-button--close');
    document.querySelector('.navbar__group').classList.toggle('navbar__group--toggle');
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
if (matchMedia) {
    const mq = window.matchMedia("(min-width: 1000px)");
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