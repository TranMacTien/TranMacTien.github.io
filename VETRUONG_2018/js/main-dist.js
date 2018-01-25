"use strict";

function VETRUONG3() {
    this.username = document.getElementById("username");
}

window.addEventListener("load", function() {
    setTimeout(function() {
        document.querySelector(".loader").classList.add("is-hidden");
    }, 2e3);
});

var vetruong = new VETRUONG3();