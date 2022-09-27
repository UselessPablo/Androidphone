let contactos = allStorage();

mostrarContactos(contactos);

function allStorage() {
  var contactos = [],
    keys = Object.keys(localStorage),
    i = keys.length;
  while (i--) {
    contactos.push(JSON.parse(localStorage.getItem(keys[i])));
  }
  return contactos;
}

function mostrarContactos(contactos) {
    contactos.forEach(contacto => {
      console.log(contacto.telefono);
      let node = document.getElementById('output');
      const textnode = document.createTextNode(contacto.telefono);
      node.appendChild(textnode);
    });
  
}