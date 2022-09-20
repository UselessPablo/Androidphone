
let contactos = allStorage();
mostrarContactos(contactos);


const btn = document.getElementById('on')

btn.onclick = () => {

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('email').value;

    let contacto = {

        id: Math.random(1, 100),
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        correo: correo,
      
    }
    localStorage.setItem(contacto.id, JSON.stringify(contacto));
    printed();
    cerrarContact();
    console.log(contacto);
    contactoNuevo(contacto);

}

function printed() {

    let data = localStorage.getItem('contacto');
    let devolucionDeContacto = JSON.parse(data);
}
function cerrarContact() {
    const modalContacts = document.getElementById('modalContacts');
    const btnCancel = document.getElementById('off');
    modalContacts.style.display = "none";
    resetForm();
}
function resetForm() {
    document.getElementById("formulario").reset();
}
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
        const node = document.createElement("li");
        const textnode = document.createTextNode(contacto.nombre + " " + contacto.apellido + '\n' + contacto.telefono + '\n' + contacto.correo);
        node.appendChild(textnode);
        document.getElementById("lista").appendChild(node);
    });
}
function openModal() {
    const modalContent = document.getElementById('modalContacts');
    modalContent.style.display = ('block');
}


function contactoNuevo(contacto) {

    const node = document.createElement("li");
    const textnode = document.createTextNode(contacto.nombre + " " + contacto.apellido + '\n' + contacto.telefono + '\n' + contacto.correo );
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    node.style.backgroundColor = "#" + randomColor;
    
}
let randomColor = randomColor1();
function randomColor1() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}
