let VETRUONG3 = {
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    loader:  document.querySelector('.loader'),
    btnSubmit: document.getElementById('OK'),
    formWrapper: document.querySelector('.form-wrapper'),
    exec: function() {
        this.handleLoader();
        this.registerEvent();
    },
    verify: function() {
        if(this.username.value === '') {
            alert('Please input your name!');
        } else if(this.password.value === '') {
            alert('Please input gift code!');
        } else if(this.password.value !== 'tien') {
            alert('Wrong gift code!');
        } else {
            alert('Success');
        }
        
    },
    registerEvent: function() {
        this.formWrapper.addEventListener('keyup', (e) => {
            e.preventDefault();
            if(e.keyCode === 13) {
                this.btnSubmit.click();
            }
        });
        this.btnSubmit.addEventListener('click', () => {
            this.verify();
        })
    },
    handleLoader: function() {
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.loader.classList.add('is-hidden');
            }, 2000);
        });
    }
}

VETRUONG3.exec.bind(VETRUONG3)();