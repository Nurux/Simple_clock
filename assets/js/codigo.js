const hours = document.querySelector('.horas')
const minutes = document.querySelector('.minutos')
const seg = document.querySelector('.segundos')

const clock = document.querySelector('#tclock')
const clockAnalog = document.querySelector('.clock')
const clockDigital = document.querySelector('.digital')

function analog(){
    const agora = new Date();

    const seconds = agora.getSeconds();
    const segundos = ((seconds / 60) * 360);
    seg.style.transform = `rotate(${segundos}deg)`

    const minuto = agora.getMinutes();
    const min = ((minuto / 60) * 360) + 270;
    minutes.style.transform = `rotate(${min}deg)`

    const horas = agora.getHours();
    const ho = ((horas / 60) * 360) + 270;
    hours.style.transform = `rotate(${ho}deg)`
}

function digital(){
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
}


clock.addEventListener('click', () => {
    clock.setAttribute('digi', 'true')
    clockAnalog.classList.toggle('none')
    clockDigital.classList.toggle('none')
})


function ver() {
    if(clock.getAttribute('digi') == 'true'){
        console.log('aui')
        setInterval(digital(), 1000);
    } else {
        setInterval(analog(), 1000);
    }
}


setInterval(ver(), 1000)
