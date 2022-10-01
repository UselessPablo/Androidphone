//fetch('https://jsonplaceholder.typicode.com/todos/1')
 const btn = document.getElementById('rick');
const getData = async () => {
const response = await fetch('https://rickandmortyapi.com/api/character');
const data = await response.json();
return data.results;

}
 getData();

btn.addEventListener('click', async () =>{



    const personajes = await getData();
   console.log(personajes);
    personajes.forEach(personaje => {
        const div = document.createElement('div');
        div.setAttribute('class', 'divList');
        const li = document.createElement('li');
        li.setAttribute('class', 'listCards');
        li.classList.add('listCards');
        li.innerHTML = `
        <img src="${personaje.image}">
        <h2>${personaje.name}</h2> 
        <p>${personaje.species}<p>
        <button>${personaje.id=''}</button>       
        
        `
        li.style.textAlign='center', li.style.listStyle='none';
        document.body.append(div)
        div.appendChild(li)
    })


})


