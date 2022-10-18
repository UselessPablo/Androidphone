




const modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
modal.style.display = "block";

span.onclick = function () {
    modal.style.display = "none";
    choose();
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let wallpapers = [];
function seleccionar() {
    const mountain = document.getElementById('mountain');
    mountain.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('./img/montaña.jpg')"
        wallpapers.push(mountain);
        localStorage.setItem(wallpapers, JSON.stringify(mountain.id));
    });

    const android = document.getElementById('android');
    android.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('./img/fondoand.png')"
        wallpapers.push(android);
        localStorage.setItem(wallpapers, JSON.stringify(android.id));
    });

    const retro = document.getElementById('retro');
    retro.addEventListener('click', function () {
        document.body.style.backgroundImage = "url('./img/retro.webp')"
        wallpapers.push(retro);
        localStorage.setItem(wallpapers, JSON.stringify(retro.id));
    });
}
function choose() {
    let obj = JSON.parse(localStorage.getItem(wallpapers));
    console.log(obj);
    document.body.style.backgroundImage = "url('./img/'" + obj + " '.webp')"
}
function closeModal() {
    setTimeout(function () {
        modal.style.display = "none";
    }, 7000);

}

seleccionar();
closeModal();


