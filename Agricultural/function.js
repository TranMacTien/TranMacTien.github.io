/* click toggle menu navbar */
(function () {
    var toggle = document.getElementById('toggle-menu-wrapper');
    toggle.addEventListener('click', function () {
        document.querySelector('.toggle-menu').classList.toggle('toggle-menu--close');
        document.querySelector('.menu-list').classList.toggle('hidden');
    })
})();

/* generate carrousel */
var countOfCarrousel = 3;
(function () {
    var carrousel = document.getElementById('header-carrousel');
    for (var i = 1; i <= countOfCarrousel; i++) {
        var node=document.createElement('div');
        node.classList.add('carrousel-item');
        carrouselBlock = '<div class="carrousel-item__text">\
        <h2>Lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consectetur adipisicing.</h2>\
        <p>Lorem ipsum dolor sit amet consectetur.</p>\
        </div>';
        node.style.backgroundImage='url("../img/carrousel-'+i+'.jpg")';
        node.innerHTML=carrouselBlock;
        carrousel.appendChild(node);

    }
})();
/* carrousel jquery */
$('.carrousel').slick({
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'
});