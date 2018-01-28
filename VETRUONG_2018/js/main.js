let VETRUONG3 = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    loader: document.querySelector('.loader'),
    btnSubmit: document.getElementById('OK'),
    formWrapper: document.querySelector('.form-wrapper'),
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
    // handleLoader: function () {
    //     window.addEventListener('load', () => {
    //         setTimeout(() => {
    //             this.loader.classList.add('is-hidden');
    //         }, 2000);
    //     });
    // },
    initGiftScreen: function() {

    }
}

VETRUONG3.exec.bind(VETRUONG3)();