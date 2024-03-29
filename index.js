const Hour = document.getElementById('hour')
const Minut = document.getElementById('min')
const Second = document.getElementById('sec')

const Time = () => {
    const time = new Date();
    const hour = time.getHours()
    const min = time.getMinutes()
    const sec = time.getSeconds()

    let hourRt = 30 * hour + min / 2;
    let minRt = 6 * min;
    let secRt = 6 * sec;

    // transform: rotate();
    Hour.style.transform = `rotate(${hourRt}deg)`
    Minut.style.transform = `rotate(${minRt}deg)`
    Second.style.transform = `rotate(${secRt}deg)`
    console.log(sec);
}
let interval = setInterval(() => {
    Time()
}, 1000)