let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let lapsContainer = document.querySelector('.laps');
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;
    lapsContainer.innerHTML = ''; // Clear laps
});

btnLap.addEventListener('click', () => {
    let lapTime = document.createElement('div');
    lapTime.className = 'lap';
    lapTime.innerHTML = `${getFormattedTime(mins)}:${getFormattedTime(seconds)}:${getFormattedTime(tens)}`;
    lapsContainer.appendChild(lapTime);
});

function startTimer(){
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    } else {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if (mins > 9) {
        getMins.innerHTML = mins;
    }
}

function getFormattedTime(unit) {
    return unit <= 9 ? '0' + unit : unit;
}