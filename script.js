var button = document.querySelector('.button');
var image = document.querySelector('.image');

button.onclick = function(){
    let url = 'https://dog.ceo/api/breeds/image/random';


    fetch(url).then((response) =>
    response.json().then((data) => {
        image.innerHTML = `<img src="${data.message}">`
    }))
}