

let rick = [];
function getCharacters(done) {
    let results = fetch('https://rickandmortyapi.com/api/character');

    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(any => {
    // console.log(data.results)
    any.results.forEach(personaje => {
        rick.push(personaje.image);
    })
    // console.log(rick);
})

setTimeout(function () {
    let contactos = allStorage();
    mostrarContactos(contactos);
}, 100);

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
    mostrarContactos(contactos);
    cerrarContact();
    // contactoNuevo(contacto);
    openPopUp();
}

function printed() {
    let data = localStorage.getItem('contacto');
  //  let devolucionDeContacto = JSON.parse(data);
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
    const contactos = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
        if (Number.parseInt(keys[i]))
            contactos.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    return contactos;
}

function getRandomImage() {
    let cantidad = rick.length;
    let nroRandom = Math.random() * cantidad;
    nroRandom = Math.floor(nroRandom); // 99
    return rick[nroRandom];
}

function mostrarContactos(contactos) {

    if (contactos.length > 0) {
        contactos.forEach(contacto => {
            
            const node = document.createElement("button");
            node.setAttribute('class', 'my-template');
            node.setAttribute('id', contacto.id++);
            const li = document.createElement('button');
            li.setAttribute('class', 'my-template');
            li.classList.add('listCards','my-template');
            li.innerHTML = `
        <img src="${getRandomImage()}">   `
            node.appendChild(li);
        const textnode = document.createTextNode(contacto.nombre + "   " + contacto.apellido + '   ' + contacto.telefono + '  ' + contacto.correo);
            node.appendChild(textnode);
            let color = (contacto.color);
            node.style.backgroundColor = `#${color}`;
// lamada al contacto 
            document.getElementById("lista").appendChild(node);
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
                        if (result.isConfirmed) {
                            localStorage.setItem("contactoSeleccionado", boton.target.id);
                        }
                        result.isConfirmed ? window.location.href = "../views/telefono.html" : Swal.fire('Gracias');
                    });
                });
            };
        });
    }
}
function openModal() {
    const modalContent = document.getElementById('modalContacts');
    modalContent.style.display = ('block');
}

// function contactoNuevo(contacto) {

//     const node = document.createElement("button");
//     const textnode = document.createTextNode(contacto.nombre + "   " + contacto.apellido + '   ' + contacto.telefono + '\n' + contacto.correo);
//     node.appendChild(textnode);
//     document.getElementById("lista").appendChild(node);
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     node.style.backgroundColor = "#" + randomColor;
//     const btnContact = document.createElement('button');
//     btnContact.setAttribute('class', 'my-template');
//     btnContact.id = contacto.id, character.id;
//     btnContact.innerHTML;
//     lista.appendChild(btnContact);
// }

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


function suma() {
    contactos = allStorage();
    return contactos.length;
}








