// requisição API RICK and MORTY
function rickAndMorty(num){
    const url = `https://rickandmortyapi.com/api/character/${num}`;
    //const tokenN = "12345612356";
    const options = {
        'method': 'get',
    
        headers: { 
            //'nameToken': tokeN 
            'content-Type': 'apllication/json'
        }
    }
    
    fetch(url, options)
        .then((resolve) => resolve.json())
        .then((data)=> {
            // informação de retorno, verificar no Json
            console.log(data.name);
    });
    
    document.getElementById('img').innerHTML = `<img src="https://rickandmortyapi.com/api/character/avatar/${num}.jpeg"/>`;
}
    
let botao = document.querySelector('#btn');

botao.addEventListener('click', () => {
    let numero = document.querySelector('#input').value
    rickAndMorty(numero)
})
