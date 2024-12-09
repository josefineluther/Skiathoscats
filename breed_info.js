const urlParams = new URLSearchParams(window.location.search)
const breed = urlParams.get('breed')
const h1 = document.querySelector('h1')
const imageAndInfo = document.querySelector('#image_and_info')
const titleElement = document.querySelector('title')

fetch('https://api.thecatapi.com/v1/breeds/search?q=' + breed + '&api_key=live_CMkDEOCKpbBXxlkAvCfVu0QwpdhoZrJZiVk2jR62CgKn9Rv0NbHqgfQyYgy6PfQK&')
    .then(response => response.json())
    .then(result => {
        console.log(result)
        const title = document.createTextNode(result[0].name)
        h1.appendChild(title)
        imageAndInfo.innerHTML = '<img class="float" src="' + result[0].image.url + '" alt="' + result[0].name + '"><div class="float"><p>Temperament: ' + result[0].temperament + '</p><p>Origin: ' + result[0].origin + '</p><p>Lifespan: ' + result[0].life_span + '</p><p>' + result[0].description + '</p></div>'
        const titleText = document.createTextNode('SCWA - ' + result[0].name + '')
        titleElement.appendChild(titleText)
    })
