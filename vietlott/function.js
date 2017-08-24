var button = document.getElementById('button');
var circleContainer = document.getElementsByClassName('circle-container');

function isExist(number, array) {
    for (var i = 0; i < array.length; i++) {
        if (number === array[i]) {
            return true;
        }
    }
    return false;
}

function random(array) {
    var randomNumber;
    while (array.length < 6) {
        randomNumber = Math.floor(Math.random() * 45 + 1);
        if (!isExist(randomNumber, array)) {
            array.push(randomNumber);
        }
    }
    return;
}


button.addEventListener('click', function () {
    var container = document.querySelector('.container');
    container.innerHTML = '';
    var n = document.getElementById('sumTicket').value;
    var vietlott = [];
    for (var index = 0; index < n; index++) {
        // create circle
        var x = document.createElement('div');
        var hr = document.createElement('hr');
        x.classList.add('circle-container');
        var y = document.querySelector('.container')
        y.appendChild(x);
        y.appendChild(hr);
        for (var j = 0; j < 6; j++) {
            var circle = document.createElement('div');
            circle.classList.add('circle');
            circle.innerHTML = '00';
            x.appendChild(circle);
        }
        var arrayNumber = [];
        while (true) {
            var arrayCompare = [];
            random(arrayCompare);
            arrayCompare.sort(function (a, b) {
                return a - b;
            })
            var str = arrayCompare.join(' ').replace(/\s/g, '');
            var number = parseInt(str);
            if (!isExist(number, vietlott)) {
                arrayNumber = arrayCompare;
                vietlott.push(number);
                break;
            }
            arrayCompare.length = 0;
        }
        var current = circleContainer[index].getElementsByClassName('circle');
        for (var i = 0; i < current.length; i++) {
            if (arrayNumber[i] >= 10) {
                current[i].innerHTML = arrayNumber[i];
            } else {
                current[i].innerHTML = '0' + arrayNumber[i];
            }
        }
    }
});