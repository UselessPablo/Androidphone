rangeInput = document.getElementById('range');
container = document.getElementsByClassName('brilloDoc')[0];

rangeInput.addEventListener("change",function(){
  container.style.filter = "brightness(" + rangeInput.value + "%)";
});

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}