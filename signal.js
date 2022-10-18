


function unchecked(){
    const noSignal = document.getElementById('noSignal');
    const signal = document.getElementById('signal');
    const checked = document.getElementById('checked');
    checked.addEventListener('click', () => {
        signal.classList.add('hide');
        setInterval(function () { noSignal.classList.remove('hide') }, 1000);
        signal.classList.remove('no-signal');
});
};
   function checked(){
       checked.addEventListener('click', () => {
           noSignal.classList.add('hide');
           setInterval(function () { signal.classList.remove('hide') }, 1000);
           
       });
        };
unchecked();
checked();
//        if (uncheck.checked == true){
//     uncheck.addEventListener('click',()=>{
//      signal.classList.add('hide');
//      setInterval(function () { noSignal.classList.add('no-signal') }, 1000);
     
    

//     })
// }


