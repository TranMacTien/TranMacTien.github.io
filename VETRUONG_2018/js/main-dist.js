"use strict";

var VETRUONG3 = {
    username: document.getElementById("username"),
    password: document.getElementById("password"),
    loader: document.querySelector(".loader"),
    btnSubmit: document.getElementById("OK"),
    formWrapper: document.querySelector(".form-wrapper"),
    exec: function() {
        this.registerEvent(), this.giftScreenControl();
    },
    verify: function() {
        if ("" === this.username.value) alert("Please input your name!"); else if ("" === this.password.value) alert("Please input gift code!"); else {
            -1727222872 === this.hashPassword(this.password.value) ? alert("success") : alert("wrong!");
        }
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
        this.congratulation = document.createElement("div"), document.body.appendChild(this.congratulation), 
        this.congratulation.className = "congratulation", this.congratulation.innerHTML = '<div class="congratulation">\n                                            <div class="congratulation__text">\n                                                <div class="congratulation__img-wrapper">\n                                                    <img class="congratulation__image bounceInDown" src="img/congratulation.png" alt="text">\n                                                </div>\n                                                <span class="congratulation__arrow">Scroll down</span>\n                                            </div>\n                                            <div class="row">\n                                                <img class="gift__image" src="img/ly_su.jpg" alt="gift">\n                                                <img class="gift__image" src="img/moc_khoa.jpg" alt="gift">\n                                                <img class="gift__image" src="img/ao_thun.jpg" alt="gift">\n                                            </div>\n                                        </div>';
    },
    giftScreenControl: function() {
        window.addEventListener("scroll", function() {
            (document.body.scrollTop || document.documentElement.scrollTop) > document.querySelector(".congratulation__text").clientHeight / 3 && Array.from(document.querySelectorAll(".gift__image")).forEach(function(t, e) {
                1 === e && (t.style.transitionDelay = ".3s"), 2 === e && (t.style.transitionDelay = ".6s"), 
                t.classList.add("fade-in");
            });
        });
    }
};

VETRUONG3.exec.bind(VETRUONG3)();