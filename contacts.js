

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
    any.results.forEach(personaje => {
        rick.push(personaje.image);
    });
});

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

    mostrarContactos();
    cerrarContact();
    openPopUp();
}

function cerrarContact() {
    const modalContacts = document.getElementById('modalContacts');
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
    nroRandom = Math.floor(nroRandom);
    return rick[nroRandom];
}

function mostrarContactos(contactos) {

    if (contactos.length > 0) {
        contactos.forEach(contacto => {
            const node = document.createElement("button");
            node.setAttribute('class', 'my-template');
            node.setAttribute('id', contacto.id++);
            const li = document.createElement('li');
            li.setAttribute('class', 'contact');
            li.classList.add('listCards', 'contact');
            li.innerHTML = `
        <img src="${getRandomImage()}">   `
            node.appendChild(li);
            const textnode = document.createTextNode(contacto.nombre + ' ' + contacto.apellido + ' ' + contacto.telefono + ' ' + contacto.correo);
            node.appendChild(textnode);
            let color = (contacto.color);
            node.style.backgroundColor = `#${color}`;
            // lamada al contacto 
            document.getElementById("lista").appendChild(node);
            let btnToast = document.querySelectorAll('.my-template');
            for (var i = 0; i < btnToast.length; i++) {
                btnToast[i].addEventListener('click', (boton) => {
                    Swal.fire({
                        title: 'Llamar',
                        showCancelButton: true,
                        confirmButtonText: 'Llamar',
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






