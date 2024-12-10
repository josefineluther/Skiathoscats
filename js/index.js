const search = document.querySelector('#search')
if (search) {
    const input = document.querySelector('input')
    const searchResult = document.querySelector('#search_result')
    search.addEventListener('input', () => {
        if (input.value.length === 0) {
            searchResult.innerHTML = ''
        } else {
            searchForCats()
        }
    })

    function searchForCats() {
        const searchQuery = input.value
        fetch('https://api.thecatapi.com/v1/breeds/search?q=' + searchQuery + '&api_key=live_CMkDEOCKpbBXxlkAvCfVu0QwpdhoZrJZiVk2jR62CgKn9Rv0NbHqgfQyYgy6PfQK&')
        .then(response => response.json())
        .then(result => {
            if (input.value !== searchQuery) {
                return
            }
            searchResult.innerHTML = ''
            for (i = 0; i < result.length; i++) { /* encodeURIComponent omvandlar mellanslag till annat tecken så det blir en fungerande länk*/
                searchResult.innerHTML += '<a href="breed_info.html?breed=' + encodeURIComponent(result[i].name) + '"><div><img class="breed_image" src="' + result[i].image.url + '" alt="' + result[i].name + '"><h3> ' + result[i].name + ' </h3></div></a>'
            }
        })
    }
}

function showHamMenu() {
    const hamMenu = document.querySelector('#ham_menu')
    hamMenu.style.display = 'flex'
}

function hideHamMenu() {
    const hamMenu = document.querySelector('#ham_menu')
    hamMenu.style.display = 'none'
}
