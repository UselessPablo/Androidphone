//fetch('https://jsonplaceholder.typicode.com/todos/1')
const btn = document.getElementById('rick');
const getData = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    console.log(data);
    console.log(data.results);
    return data.results;

}
getData();

btn.addEventListener('click', async () => {

    const characters = await getData();
    console.log(characters);
    characters.forEach(character => {
        const div = document.createElement('div');
        div.setAttribute('class', 'divList');
        const li = document.createElement('li');
        li.setAttribute('class', 'listCards');
        li.classList.add('listCards');
        li.innerHTML = `
        <img src="${character.image}">   
        <h1>${character.name}</h1>
        <h2>${character.status}</h2> 
        <button>${character.id}</button>   
        `
        li.style.textAlign = 'center', li.style.listStyle = 'none';
        document.body.append(div)
        div.appendChild(li)

    });
});


