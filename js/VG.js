const action = document.querySelector('#action')
const form = document.querySelector('form')
const cityName = document.querySelector('#city_name')
const id = document.querySelector('#id')
const textBox = document.querySelector('#text_box')
const save = document.querySelector('#save_text')
const savedTextForm = document.querySelector('#saved_text_form')
const showSavedText = document.querySelector('#show_saved_text')

/* fetch cities */

function cities(event) {
    event.preventDefault()
    if (action.value === 'get') {
        fetch('https://avancera.app/cities')
            .then(response => response.json())
            .then(result => {
                console.log(result)
            })
    } else if (action.value === 'post') {
        fetch('https://avancera.app/cities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: cityName.value, population: Number(population.value) })
        })
            .then(response => response.json())
            .then(result => {
                alert('The city has been created!')
            })
    } else if (action.value === 'put') {
        fetch('https://avancera.app/cities/' + id.value, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id.value, name: cityName.value, population: Number(population.value) })
        })
            .then(result => {
                alert('The city-information has been changed!')
            })
    } else if (action.value === 'delete') {
        fetch('https://avancera.app/cities/' + id.value, {
            method: 'DELETE'
        })
            .then(result => {
                alert('The city has been deleted!')
            })
    }
    form.reset()
}

form.addEventListener('submit', cities)

/* local storage */

function saveLocalStorage(event) {
    event.preventDefault()
    const textBoxContent = textBox.value
    localStorage.setItem('writtenText', textBoxContent)
    alert('Your message has been saved')
}

const savedWrittenText = localStorage.getItem('writtenText')
textBox.value = savedWrittenText

savedTextForm.addEventListener('submit', saveLocalStorage)
