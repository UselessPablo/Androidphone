class passwords {
    constructor(password) {
        this.password = password;
    }
}
const pass = document.getElementById('lockScr');
const passwordAdd = JSON.parse(localStorage.getItem("passwords")) ?? [];
document.getElementById("newPass").addEventListener("submit", addPass);
function addPass(e) {
    e.preventDefault();
    const formulario = new FormData(e.target)
    let password = formulario.get("password");
    const newPass = new passwords(password);
    passwords.password = localStorage.setItem("passwords", JSON.stringify(newPass));
    
    console.log(password);
    if (password ==='' || password.length < 4 || password.length >= 5){
        alert('debe contener 4 dígitos');
        e.target.reset();
    }
    else{
        alert("guardada con exito");
        window.location.href ='./index2.html';
}
}
