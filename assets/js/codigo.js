const hours = document.querySelector('.horas')
const minutes = document.querySelector('.minutos')
const seg = document.querySelector('.segundos')

const dark = document.querySelector('#darkmode')
const clock = document.querySelector('#tclock')
const menu = document.querySelector('.menu')

const clockAnalog = document.querySelector('.clock')
const clockDigital = document.querySelector('.digital')

setInterval(function analog(){
    const agora = new Date();

    const seconds = agora.getSeconds();
    const segundos = ((seconds / 60) * 360);
    seg.style.transform = `rotate(${segundos}deg)`

    const minuto = agora.getMinutes();
    const min = ((minuto / 60) * 360) + 270;
    minutes.style.transform = `rotate(${min}deg)`

    const horas = agora.getHours();
    const ho = ((horas / 60) * 360) + 340;
    hours.style.transform = `rotate(${ho}deg)`
})

setInterval(function digital() {
    const h = document.querySelector('.dhoras')
    const m = document.querySelector('.dminutos')
    const s = document.querySelector('.dsegundos')

    const data = new Date();
    const hora = data.getHours();
    const minuto = data.getMinutes();
    const segundo = data.getSeconds();

    h.textContent = hora
    m.textContent = minuto
    s. textContent = segundo
})

clock.addEventListener('click', () => {
    clock.setAttribute('digi', 'true')
    clockAnalog.classList.toggle('none')
    clockDigital.classList.toggle('none')
})

dark.addEventListener('click', () => {
    menu.classList.toggle('darkmode')
    clockAnalog.classList.toggle('darkmode')
    clockDigital.classList.toggle('darkmode')
})