




let uncheck = document.getElementById('checked').checked = false;
console.log(uncheck);
let checked = document.getElementById('checked').checked = true;
console.log(checked);
let noSignal = document.getElementById('noSignal');
console.log(noSignal);
let signal = document.getElementById('signal');

function unchecked(){
if (checked.checked === false && uncheck.checked === true){
    checked.addEventListener('click', () => {
        signal.classList.add('hide');
        setInterval(function () { signal.classList.remove('hide') }, 1000);
        noSignal.classList.remove('no-signal');
    
    
})
}
}
   
//        if (uncheck.checked == true){
//     uncheck.addEventListener('click',()=>{
//      signal.classList.add('hide');
//      setInterval(function () { noSignal.classList.add('no-signal') }, 1000);
     
    

//     })
// }


