




let uncheck = document.getElementById('checked').checked = false;
let checked = document.getElementById('checked').checked = true;

let noSignal = document.getElementById('noSignal');
function unchecked(){
  
    checked.addEventListener('click', () => {
        let signal = document.getElementById('signal');
        setInterval(function () { signal.classList.remove('hide') }, 1000);
        noSignal.classList.remove('no-signal');
    
    
})

}
    //        if (uncheck.checked == true){
//     uncheck.addEventListener('click',()=>{
//      signal.classList.add('hide');
//      setInterval(function () { noSignal.classList.add('no-signal') }, 1000);
     
    

//     })
// }


