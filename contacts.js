import {fetchData} from "./responseFetch.js";


async function getData (){
let data = await(fetchData());
console.log(data);
}
getData();
// const rick = [];

// console.log(rick);
// const getData = async () => {
//     const response = await fetch('https://rickandmortyapi.com/api/character');
//     const data = await response.json();
//     return data.results;   
// }
// getData();
// async function prints() {
//     const characters = await getData();
//     characters.forEach(character =>{
//         let imagen = (character.image);
//         rick.push(await imagen);
//     })
// };
// //rick.push(prints());
// prints();




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
    localStorage.setItem(contacto.id, JSON.stringify(contacto)) ?? contactos;
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
    const contactos = [];
    let keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
        if (Number.parseInt(keys[i]))
            contactos.push(JSON.parse(localStorage.getItem(keys[i])));
    }
    // contactos = contactos.sort((a, b) => {
    //     if (a.nombre < b.nombre) {
    //         return -1;
    //     }
    // });
    return contactos;
}

function getRandomImage() {
    let cantidad = rick.length;
    let nroRandom = Math.random() * cantidad;
    nroRandom = Math.floor(nroRandom); // 99
    console.log("numero", nroRandom);
    console.log(rick[0]);
    return rick[2];
}

function mostrarContactos(contactos) {

    if (contactos.length > 0) {
        contactos.forEach(contacto => {
            const node = document.createElement("button");
            node.setAttribute('class', 'my-template');
            node.setAttribute('id', contacto.id++);
            const textnode = document.createTextNode(contacto.nombre + "   " + contacto.apellido + '   ' + contacto.telefono + '  ' + contacto.correo);
            node.appendChild(textnode);
            let color = (contacto.color);
            node.style.backgroundColor = `#${color}`;
            document.getElementById("lista").appendChild(node);
            console.log(getRandomImage());
        });
    }
}
function openModal() {
    const modalContent = document.getElementById('modalContacts');
    modalContent.style.display = ('block');
}

function contactoNuevo(contacto) {

    const node = document.createElement("button");
    const textnode = document.createTextNode(contacto.nombre + "   " + contacto.apellido + '   ' + contacto.telefono + '\n' + contacto.correo);
    node.appendChild(textnode);
    document.getElementById("lista").appendChild(node);
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    node.style.backgroundColor = "#" + randomColor;
    const btnContact = document.createElement('button');
    btnContact.setAttribute('class', 'my-template');
    btnContact.id = contacto.id, character.id;
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
            if (result.isConfirmed) {
                localStorage.setItem("contactoSeleccionado", boton.target.id);
            }
            result.isConfirmed ? window.location.href = "../views/telefono.html" : Swal.fire('Gracias');
        });
    });
};

function suma() {
    contactos = allStorage();
    return contactos.length;
}
    
// // Fetch url rick y morty






