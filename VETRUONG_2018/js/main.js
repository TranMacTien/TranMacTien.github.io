window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').classList.add('is-hidden');
    }, 2000)
});

let vetruong = new VETRUONG3();

function VETRUONG3() {
    this.username = document.getElementById('username');


}