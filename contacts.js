

const scheduled = [];

function inputContacto(nombre, apellido, numero, correo, color) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numero = numero;
    this.correo = correo;
    this.color = color;
};
function createContact() {
    let nom = prompt('Nombre del Contacto');
    let ape = prompt('Apellido del contacto');
    let num = Number(prompt('Teléfono del Contacto'));
    let cor = prompt('Correo del Contacto');
    let col = prompt('Elige un color de Contacto')
    let contact = scheduled.push(nom, ape, num, cor, col);
    scheduled.push(contact);
    alert('El Contacto ' + scheduled.join(" \n ") + 'se a guardado Correctamente\n');

}



function getContact() {
    console.table(scheduled);
}

let options;
function form() {
    while (options !== 0) {
        options = Number(prompt('Ingresa una opción:\n1. Crear contacto nuevo\n2. Ver contactos\n0. Salir'));
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

function buscar() {
    let color = scheduled.find(element => element == this.color);
    console.log(color);
}
buscar();
// agenda = scheduled.find(nombre => nombre === scheduled[i-1]);
// //  return (agenda);
// // }


// buscarContacto = agenda.find(nombre => nombre == buscarContacto);
// alert(buscarContacto);