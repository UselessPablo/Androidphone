









function unchecked(){
    let noSignal = document.getElementById('noSignal');
    let signal = document.getElementById('signal');
   // let uncheck = document.getElementById('checked');
    let checked = document.getElementById('checked');
    console.log(checked);
    checked.addEventListener('click', () => {
        
        signal.classList.add('hide');
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


