let timerId; // переменная, которая будет хранить ID таймера
let isRunning = false;

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    if(!isRunning){
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
    isRunning = true;
    }
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    if(isRunning){
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
    isRunning = false;
    }
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}
