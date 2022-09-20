


var contactList = [];
const btn = document.getElementById('on');
const btnCancel = document.getElementById('off');
const modal = document.getElementById('id101');
btnCancel.addEventListener("click", function(){
//modal.classList.add = ("hide");
})
btn.onclick = createContact;
function createContact() {
    let nom = document.getElementById('nombre').value;
    let ape = document.getElementById('apellido').value;
    let num = document.getElementById('telefono').value;
    let cor = document.getElementById('email').value;



    const contact = {
        nombre: nom,
        apellido: ape,
        numero: num,
        correo: cor,
        
    }
    contactList.push(contact);
    alert(contact.nombre + " " + contact.numero + " " +'   |*   Guardado  Correctamente   *|   ');
    return(contactList);
}
function crear (){
document.getElementById('ol').append(contactList);
}
function getContact() {
    console.table(contactList);
    let resultado = contactList;
    var i = 0;
    for (i = 0; i < resultado.length; i++) {
        return(resultado[i].nombre + resultado[i].numero);
    };
}
getContact();


const createContacts = document.getElementById('change');
for (resultado of contactList) {
    const indice = document.createElement('p');
    indice.innerHTML = `${resultado.nombre.charAt(0)}`;
    const item = document.createElement('li');
    item.innerHTML = ` ${resultado.nombre + " " + resultado.apellido}`;
    createContacts.append(indice, item);

}

