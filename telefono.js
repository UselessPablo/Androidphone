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