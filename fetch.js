//fetch('https://jsonplaceholder.typicode.com/todos/1')
 const btn = document.getElementById('rick');
const getData = async () => {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-41.17&longitude=-71.36&hourly=temperature_2m,apparent_temperature,rain,weathercode,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_hours&current_weather=true&timezone=auto');
const data = await response.json();
console.log(data);
return data.results;

}
 getData();

btn.addEventListener('click', async () =>{



    const clima = await getData();
   console.log(clima);
    clima.forEach(climaDiario => {
        const div = document.createElement('div');
        div.setAttribute('class', 'divList');
        const li = document.createElement('li');
        li.setAttribute('class', 'listCards');
        li.classList.add('listCards');
        li.innerHTML = `
        <img src="${climaDiario.current_weather}">
        <h2>${personaje.name}</h2> 
        <p>${personaje.species}<p>
        <button>${personaje.id=''}</button>       
        
        `
        li.style.textAlign='center', li.style.listStyle='none';
        document.body.append(div)
        div.appendChild(li)
    })


})


