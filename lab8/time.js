function showTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let secondRotation = seconds * 6; // 360 / 60 = 6
    let minuteRotation = (minutes * 6) + (seconds / 10); // 360 / 60 = 6
    let hourRotation = (hours % 12 * 30) + (minutes / 2); // 360 / 12 = 30


    let currentTime = today.toLocaleTimeString('ru-RU');
    let currentSeconds = today.getSeconds();
    document.getElementById('time').innerHTML = currentTime;
    document.getElementById('seconds').innerHTML = ('0' + currentSeconds).slice(-2);
    document.getElementById('second-hand').style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;
    document.getElementById('minute-hand').style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;
    document.getElementById('hour-hand').style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;

    document.getElementById('time').innerHTML = today.toLocaleTimeString('ru-RU');
    document.getElementById('seconds').innerHTML = ('0' + seconds).slice(-2);
}
setInterval(showTime, 1000);