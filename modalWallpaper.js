




const modal = document.getElementById("myModal");

const span = document.getElementsByClassName("close")[0];
modal.style.display = "block";

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function seleccionar() {
    const mountain = document.getElementById('mountain');
    mountain.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('./img/montaña.jpg')"

    });

    const android = document.getElementById('android');
    android.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('./img/fondoand.png')"

    });

    const retro = document.getElementById('retro');
    retro.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('./img/retro.webp')"

    });
}
function closeModal() {
    setTimeout(function () {
        modal.style.display = "none";
    }, 7000);

}

seleccionar();
closeModal();


