

function startTime() {
    const actualhour = new Date();
    let hour = actualhour.getHours();
    let minutes = actualhour.getMinutes();
    let seconds = actualhour.getSeconds();

    document.getElementById('hours').textContent = hour;
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('hours').textContent = hour;
}
startTime2();
setInterval(startTime, 1000);
//  reloj central
function startTime2() {
    const actualhour = new Date();
    let hour = actualhour.getHours();
    let minutes = actualhour.getMinutes();
    let seconds = actualhour.getSeconds();

    document.getElementById('hours2').textContent = hour;
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }
    if (hour < 10) {
        hour = "0" + hour
    }
    document.getElementById('minutes2').textContent = minutes;
    document.getElementById('seconds2').textContent = seconds;
    document.getElementById('hours2').textContent = hour;
}
startTime2();
setInterval(startTime2, 1000);

///Termina el  reloj en vivo

let search = document.getElementById('search');
let text = document.getElementById('texto');
function goGoogle() {
    let google = document.getElementsByClassName('googleW')
    window.open(url = "https://www.google.com/")
}

search.addEventListener('mouseout', mouseOut);
search.addEventListener('mouseover', mouseOver);

function mouseOut() {
    text.classList.add('small');
    search.style.background = 'white';
    search.style.paddingLeft = ' 25px';
}

function mouseOver() {
    text.classList.add('big');
    search.innerHTML = "Buscar en Google";
    search.style.fontFamily = 'maven pro';
    search.style.background = 'grey';
    text.style.paddingLeft = ' 25px';
}





