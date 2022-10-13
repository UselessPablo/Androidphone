

const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
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
const mountain = document.getElementById('mountain');
mountain.addEventListener('click', function () { document.body.style.backgroundImage = "url('./img/montaña.jpg')"
    console.log(mountain);
localStorage.setItem("fondo", JSON.stringify(mountain.id));
});

const android = document.getElementById('android');
android.addEventListener('click', function () { document.body.style.backgroundImage = "url('./img/fondoand.png')"
    localStorage.setItem("fondo", JSON.stringify(android.id)); 
   // localStorage.getItem('fondo', JSON.parse(android.id )
});

const retro = document.getElementById('retro');
retro.addEventListener('click', function () { document.body.style.backgroundImage = "url('./img/retro.webp')"
    localStorage.setItem("fondo", JSON.stringify(retro.id));
 });
