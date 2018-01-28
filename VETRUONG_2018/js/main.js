let VETRUONG3 = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    loader: document.querySelector('.loader'),
    btnSubmit: document.getElementById('OK'),
    formWrapper: document.querySelector('.form-wrapper'),
    exec: function () {
        // this.handleLoader();
        this.registerEvent();
        this.giftScreenControl();
    },
    verify: function () {
        if (this.username.value === '') {
            alert('Please input your name!');
        } else if (this.password.value === '') {
            alert('Please input gift code!');
        } else {
            let hashPass = this.hashPassword(this.password.value);
            if(hashPass === -1727222872) {
                alert('success');
            } else {
                alert('wrong!');
            }
        }

    },
    hashPassword: function (password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            let chr = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0;
        }
        return hash;
    },
    registerEvent: function () {
        this.formWrapper.addEventListener('keyup', (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                this.btnSubmit.click();
            }
        });
        this.btnSubmit.addEventListener('click', () => {
            this.verify();
        })
    },
    handleLoader: function () {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loader.classList.add('is-hidden');
            }, 2000);
        });
    },
    initGiftScreen: function() {
        this.congratulation = document.createElement('div');
        document.body.appendChild(this.congratulation);
        this.congratulation.className = 'congratulation';
        this.congratulation.innerHTML = `<div class="congratulation">
                                            <div class="congratulation__text">
                                                <div class="congratulation__img-wrapper">
                                                    <img class="congratulation__image bounceInDown" src="img/congratulation.png" alt="text">
                                                </div>
                                                <span class="congratulation__arrow">Scroll down</span>
                                            </div>
                                            <div class="row">
                                                <img class="gift__image" src="img/ly_su.jpg" alt="gift">
                                                <img class="gift__image" src="img/moc_khoa.jpg" alt="gift">
                                                <img class="gift__image" src="img/ao_thun.jpg" alt="gift">
                                            </div>
                                        </div>`;
    },
    giftScreenControl: function() {
        window.addEventListener('scroll', () => {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            let anchor = document.querySelector('.congratulation__text').clientHeight / 3;
            if(scrollTop > anchor) {
                Array.from(document.querySelectorAll('.gift__image')).forEach((item, i) => {
                    if(i === 1) {
                        item.style.transitionDelay = '.3s';
                    }
                    if(i === 2) {
                        item.style.transitionDelay = '.6s';
                    }
                    item.classList.add('fade-in');
                });
            }
        });
    }
}

VETRUONG3.exec.bind(VETRUONG3)();