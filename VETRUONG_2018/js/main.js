let VETRUONG3 = {
    popup: {},
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    loader: document.querySelector('.loader'),
    btnSubmit: document.getElementById('OK'),
    formWrapper: document.querySelector('.form-wrapper'),
    container: document.querySelector('.container'),
    exec: function () {
        this.handleLoader();
        this.registerEvent();

    },
    verify: function () {
        if (this.username.value === '') {
            alert('Please input your name!');
        } else if (this.password.value === '') {
            alert('Please input gift code!');
        } else {
            let hashPass = this.hashPassword(this.password.value);
            if (hashPass === -1727222872) {
               this.loginSuccess();
            } else {
               this.loginFail();
            }
        }
    },

    loginSuccess: function() {
        this.initGiftScreen();
        this.removeLoginPage();
    },

    loginFail: function () {
        this.initPopup();
        this.popup.showLoginFail();
    },

    removeLoginPage: function() {
        document.querySelector('.cover-img').style.display = 'none';
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
    initGiftScreen: function () {
        this.congratulation = document.createElement('div');
        this.container.appendChild(this.congratulation);
        this.congratulation.className = 'congratulation';
        this.congratulation.innerHTML = `<div class="congratulation">
                                            <div class="congratulation__text">
                                                <div class="congratulation__img-wrapper">
                                                    <img class="congratulation__image bounceInDown" src="img/congratulation.png" alt="text">
                                                </div>
                                                <span class="congratulation__arrow">Scroll down</span>
                                            </div>
                                            <div class="row gift">
                                                <div class="gift__wrapper">
                                                    <img class="gift__image" src="img/ly_su.jpg" alt="gift">
                                                </div>
                                                <div class="gift__wrapper">
                                                    <img class="gift__image" src="img/moc_khoa.jpg" alt="gift">
                                                </div>
                                                <div class="gift__wrapper">
                                                    <img class="gift__image" src="img/ao_thun.jpg" alt="gift">
                                                </div>
                                            </div>
                                        </div>`;
        this.giftScreenControl();
    },
    giftScreenControl: function () {
        window.addEventListener('scroll', () => {
            let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            let anchor = document.querySelector('.congratulation__text').clientHeight / 3;
            if (scrollTop > anchor) {
                Array.from(document.querySelectorAll('.gift__image')).forEach((item, i) => {
                    if (i === 1) {
                        item.style.transitionDelay = '.3s';
                    }
                    if (i === 2) {
                        item.style.transitionDelay = '.6s';
                    }
                    item.classList.add('fade-in');
                });
            }
        });
    },
    initPopup: function () {
        this.popup.overlayBg = document.createElement('div');
        this.popup.overlayBg.className = 'overlay-bg';
        this.popup.popupContent = document.createElement('div');
        this.popup.popupContent.className = 'popup__content';
        this.popup.popupButton = document.createElement('button');
        this.popup.popupButton.className = 'popup__button';
        this.popup.popupButton.innerText = 'OK';
        this.container.appendChild(this.popup.overlayBg);
        this.popup.overlayBg.appendChild(this.popup.popupContent);
        this.popup.showLoginFail = () => {
            this.popup.popupContent.innerHTML = 'Wrong password! </br>Please try again.';
            this.popup.popupContent.appendChild(this.popup.popupButton);
        }
        this.popup.eventClose = () => {
            this.popup.popupButton.addEventListener('click', () => {
                this.popup.close();
            });
        }
        this.popup.close = () => {
            this.popup.overlayBg.parentNode.removeChild(this.popup.overlayBg);
        }
        // exec func
        this.popup.eventClose();
    }
}

VETRUONG3.exec.bind(VETRUONG3)();