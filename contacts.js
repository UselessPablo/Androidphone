


let contactos = allStorage();

mostrarContactos(contactos);

const btn = document.getElementById('on')

btn.onclick = () => {
    document.location.reload(true);
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('email').value;
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    let contacto = {
        id: suma() + 1,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        correo: correo,
        color: randomColor,

    }
    localStorage.setItem(contacto.id, JSON.stringify(contacto));
    printed();
    cerrarContact();
    contactoNuevo(contacto);
    openPopUp();
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
        if (keys[i] != "contactoSeleccionado")
            contactos.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    contactos = contactos.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        }
    });
    return contactos;
}

function mostrarContactos(contactos) {
  
     
                  contactos.forEach(contacto  => {
        const node = document.createElement("button");
        node.setAttribute('class', 'my-template');
        node.setAttribute('id', contacto.id++);
        const textnode = document.createTextNode(contacto.nombre + " " + contacto.apellido + '\n' + contacto.telefono + '\n' + contacto.correo);
        
       // node.appendChild(imagen);
        node.appendChild(textnode);
        let color = (contacto.color);
        node.style.backgroundColor = `#${color}`;
        document.getElementById("lista").appendChild(node);
                 
    });
        
}
function openModal() {
    const modalContent = document.getElementById('modalContacts');
    modalContent.style.display = ('block');
}

function contactoNuevo(contacto) {
    const node = document.createElement("button");
    const textnode = document.createTextNode(peronaje.image + contacto.nombre + " " + contacto.apellido + '\n' + contacto.telefono + '\n' + contacto.correo);
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    node.style.backgroundColor = "#" + randomColor;
    const btnContact = document.createElement('button');
    btnContact.setAttribute('class', 'my-template');
    btnContact.id = contacto.id;
    // btnContact.setAttribute('id', contacto.id);

    btnContact.innerHTML;
    lista.appendChild(btnContact);
}

function openPopUp() {
    let popUp = document.getElementById('mensajePop');
    popUp.classList.add('openPopUp');
}

function closePopup() {
    let popUp = document.getElementById('mensajePop');
    popUp.classList.remove('openPopUp');
}

function openModal2() {
    const modalContent = document.getElementById('modalContent');
    modalContent.style.display = ('block');
}

let btnToast = document.querySelectorAll('.my-template');

for (var i = 0; i < btnToast.length; i++) {
    btnToast[i].addEventListener('click', (boton) => {

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
    });
};

function suma() {
    contactos = allStorage();
    return contactos.length;
}
// // Fetch url rick y morty


// btnSaved.addEventListener('click', async () => {

//     const personajes = await getData();
//     console.log(personajes);
//     personajes.forEach(personaje => {
//         const div = document.createElement('div');
//         div.setAttribute('class', 'divList');
//         const li = document.createElement('li');
//         li.setAttribute('class', 'listCards');
//         li.classList.add('listCards');
//         li.innerHTML = `
//         <img src="${personaje.image}">
//         <h2>${personaje.name}</h2> 
//         <p>${personaje.species}<p>
//         <button>${personaje.id = ''}</button>       
        
//         `
//         li.style.textAlign = 'center', li.style.listStyle = 'none';
//         document.body.append(div)
//         div.appendChild(li)
//     })


// });

