// let contactos = allStorage();


mostrarContacto();

function allStorage() {
  var contactos = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    contactos.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return contactos;
}

function mostrarContacto() {

  let contactoSeleccionado = localStorage.getItem('contactoSeleccionado');
  let contacto = localStorage.getItem(contactoSeleccionado);

  let devolucionDeContacto = JSON.parse(contacto);

  let node = document.getElementById('output');
  const textnode = document.createTextNode(devolucionDeContacto.telefono);
  node.appendChild(textnode);


}

var count = 0;

$(".digit").on('click', function () {
  var num = ($(this).clone().children().remove().end().text());
  if (count < 11) {
    $("#output").append('<span>' + num.trim() + '</span>');

    count++
  }
});
const llamar = document.getElementById('llamar');
llamar.addEventListener('click',()=>{


Swal.fire({
  title: 'Llamar a este contacto: ',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Llamar',
  denyButtonText: `No, gracias`,
}).then((result) => {
  localStorage.setItem("contactoSeleccionado", boton.target.id);
  result.isConfirmed ? window.location.href = "../views/telefono.html" : Swal.fire('Gracias');
});
    
})
