window.onload = function () {
    var seconds = `00`;
    var tens = `00`;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var btnstart = document.getElementById("btn-start");
    var btnstop = document.getElementById("btn-stop");
    var btnreset = document.getElementById("btn-reset");
    var Interval;

    document.getElementById('btnstart').onclick = function () {
        Interval = setInterval(startTimer, 20);
    }
}

btnstart.onclick = function () {
    Interval = setInterval(startTimer, 20);
}

btnstop.onclick = function () {
    clearInterval(Interval);

}

btnreset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;

}

function startTimer() {
    tens++;

    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
        console.log(tens + "one");
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
        console.log(tens + "Two");
    }

    if (tens > 99) {
        console.log(tens + "Three");

        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;

        if (seconds > 9) {
            appendTens.innerHTML = tens;
            console.log(tens + "Four");
        }


    }
}
