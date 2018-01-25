"use strict";

var VETRUONG3 = {
    username: document.getElementById("username"),
    password: document.getElementById("password"),
    loader: document.querySelector(".loader"),
    btnSubmit: document.getElementById("OK"),
    formWrapper: document.querySelector(".form-wrapper"),
    exec: function() {
        this.handleLoader(), this.registerEvent();
    },
    verify: function() {
        "" === this.username.value ? alert("Please input your name!") : "" === this.password.value ? alert("Please input gift code!") : "tien" !== this.password.value ? alert("Wrong gift code!") : alert("Success");
    },
    registerEvent: function() {
        var e = this;
        this.formWrapper.addEventListener("keyup", function(t) {
            t.preventDefault(), 13 === t.keyCode && e.btnSubmit.click();
        }), this.btnSubmit.addEventListener("click", function() {
            e.verify();
        });
    },
    handleLoader: function() {
        var e = this;
        window.addEventListener("load", function() {
            setTimeout(function() {
                e.loader.classList.add("is-hidden");
            }, 2e3);
        });
    }
};

VETRUONG3.exec.bind(VETRUONG3)();