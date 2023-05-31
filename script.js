var audio = new Audio('/sounds/tic.mp3');
setInterval(() => {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
    hrotate = 30 * h + m / 2;
    mrotate = 6 * m + s / 10;
    srotate = 6 * s;
    hour.style.transform = `rotate(${hrotate}deg)`;
    audio.play();
    minute.style.transform = `rotate(${mrotate}deg)`;
    second.style.transform = `rotate(${srotate}deg)`;
    document.getElementById("timebox").innerText = n;
}, 1000);