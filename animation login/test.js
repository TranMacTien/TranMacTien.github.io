var btnSubmit=document.getElementById('btn-submit');
btnSubmit.addEventListener('click', function(){
    this.classList.add('login-form__btn--collapse');
    setTimeout(function(){
        document.querySelector('.loading').classList.add('loading--show');
    }, 500);
    document.querySelector('.login-form__btn>span').style.visibility='hidden';
    setTimeout(function(){
        document.querySelector('.scale-out').classList.add('scale');
    }, 1000);
    setTimeout(function(){
        document.querySelector('.container').style.display='none';
        document.querySelector('.hello').style.visibility='visible';
        document.querySelector('.hello h1').classList.add('scale-zoom-in');
    }, 1200);
});