

var contactList = [];

function createContact() {
    let nom = prompt('Nombre del Contacto');
    let ape = prompt('Apellido del contacto');
    let num = Number(prompt('Teléfono del Contacto'));
    let cor = prompt('Correo del Contacto');
    let col = prompt('Elige un color de Contacto')


    const contact = {
        nombre: nom,
        apellido: ape,
        numero: num,
        correo: cor,
        color: col,
    }
    contactList.push(contact);
    alert(contact.nombre + " " + contact.numero + " " + contact.color + '   |*   Guardado   *|   ');
    //console.log(contactList);
}

function getContact() {
    console.table(contactList);
    let filter = prompt('Buscar contacto por color');
    let resultado = buscarPorColor(filter);
    var i = 0;
    for (i = 0; i < resultado.length; i++) {
        alert("Nombre: " + resultado[i].nombre + '\n' + 'Teléfono: ' + resultado[i].numero);
    }
}
let options;
function form() {
    while (options !== 0) {
        options = Number(prompt('Ingresa una opción:\n1. Crear contacto nuevo\n2. Buscar contacto\n0. Salir'));
        switch (options) {
            case 1:
                createContact();
                break;
            case 2:
                getContact();
                break;
            case 0:
                alert('Hecho');
                break;
            default:
                alert('Opción incorrecta');
                break;
        }
    }
}
form();

function buscarPorColor(color) {
    let resultado = contactList.filter(x => x.color === color);
    console.log(resultado);
    return resultado;
}

const createContacts = document.getElementById('change');
for (let resultado of contactList){
    console.log(resultado);
    const item = document.createElement('li');
    item.innerHTML = ` ${resultado.nombre +" "+ resultado.apellido }`;
                          
createContacts.append(item);           
}