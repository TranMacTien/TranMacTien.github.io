"use strict";

var VETRUONG3 = {
    popup: {},
    username: document.getElementById("username"),
    password: document.getElementById("password"),
    loader: document.querySelector(".loader"),
    btnSubmit: document.getElementById("OK"),
    formWrapper: document.querySelector(".form-wrapper"),
    container: document.querySelector(".container"),
    exec: function() {
        this.handleLoader(), this.registerEvent();
    },
    verify: function() {
        if ("" === this.username.value) alert("Please input your name!"); else if ("" === this.password.value) alert("Please input gift code!"); else {
            -1727222872 === this.hashPassword(this.password.value) ? this.loginSuccess() : this.loginFail();
        }
    },
    loginSuccess: function() {
        this.initGiftScreen(), this.removeLoginPage();
    },
    loginFail: function() {
        this.initPopup(), this.popup.showLoginFail();
    },
    removeLoginPage: function() {
        document.querySelector(".cover-img").style.display = "none";
    },
    hashPassword: function(t) {
        for (var e = 0, n = 0; n < t.length; n++) {
            e = (e << 5) - e + t.charCodeAt(n), e |= 0;
        }
        return e;
    },
    registerEvent: function() {
        var t = this;
        this.formWrapper.addEventListener("keyup", function(e) {
            e.preventDefault(), 13 === e.keyCode && t.btnSubmit.click();
        }), this.btnSubmit.addEventListener("click", function() {
            t.verify();
        });
    },
    handleLoader: function() {
        var t = this;
        window.addEventListener("load", function() {
            setTimeout(function() {
                t.loader.classList.add("is-hidden");
            }, 2e3);
        });
    },
    initGiftScreen: function() {
        this.congratulation = document.createElement("div"), this.container.appendChild(this.congratulation), 
        this.congratulation.className = "congratulation", this.congratulation.innerHTML = '<div class="congratulation">\n                                            <div class="congratulation__text">\n                                                <div class="congratulation__img-wrapper">\n                                                    <img class="congratulation__image bounceInDown" src="img/congratulation.png" alt="text">\n                                                </div>\n                                                <span class="congratulation__arrow">Scroll down</span>\n                                            </div>\n                                            <div class="row gift">\n                                                <div class="gift__wrapper">\n                                                    <img class="gift__image" src="img/ly_su.jpg" alt="gift">\n                                                </div>\n                                                <div class="gift__wrapper">\n                                                    <img class="gift__image" src="img/moc_khoa.jpg" alt="gift">\n                                                </div>\n                                                <div class="gift__wrapper">\n                                                    <img class="gift__image" src="img/ao_thun.jpg" alt="gift">\n                                                </div>\n                                            </div>\n                                        </div>', 
        this.giftScreenControl();
    },
    giftScreenControl: function() {
        window.addEventListener("scroll", function() {
            (document.body.scrollTop || document.documentElement.scrollTop) > document.querySelector(".congratulation__text").clientHeight / 3 && Array.from(document.querySelectorAll(".gift__image")).forEach(function(t, e) {
                1 === e && (t.style.transitionDelay = ".3s"), 2 === e && (t.style.transitionDelay = ".6s"), 
                t.classList.add("fade-in");
            });
        });
    },
    initPopup: function() {
        var t = this;
        this.popup.overlayBg = document.createElement("div"), this.popup.overlayBg.className = "overlay-bg", 
        this.popup.popupContent = document.createElement("div"), this.popup.popupContent.className = "popup__content", 
        this.popup.popupButton = document.createElement("button"), this.popup.popupButton.className = "popup__button", 
        this.popup.popupButton.innerText = "OK", this.container.appendChild(this.popup.overlayBg), 
        this.popup.overlayBg.appendChild(this.popup.popupContent), this.popup.showLoginFail = function() {
            t.popup.popupContent.innerHTML = "Wrong password! </br>Please try again.", t.popup.popupContent.appendChild(t.popup.popupButton);
        }, this.popup.eventClose = function() {
            t.popup.popupButton.addEventListener("click", function() {
                t.popup.close();
            });
        }, this.popup.close = function() {
            t.popup.overlayBg.parentNode.removeChild(t.popup.overlayBg);
        }, this.popup.eventClose();
    }
};

VETRUONG3.exec.bind(VETRUONG3)();