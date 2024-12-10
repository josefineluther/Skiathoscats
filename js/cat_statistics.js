const catChart = document.querySelector('#cat_chart')
const barColors = ['#D60D47', '#F6705D', '#FFDA8A', '#478BAD', '#194663']
let xValues = []
let yValues = []

fetch('https://api.thecatapi.com/v1/breeds?limit=20&api_key=live_CMkDEOCKpbBXxlkAvCfVu0QwpdhoZrJZiVk2jR62CgKn9Rv0NbHqgfQyYgy6PfQK&')
  .then(response => response.json())
  .then(result => {
    result.forEach(cat => {
      xValues.push(cat.name)
      yValues.push(cat.intelligence)
    })
    new Chart(catChart, {
      type: 'bar',
      options: {
        plugins: {
          legend: { display: false },
          title: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 6,
            min: 0,
            ticks: {
              stepSize: 1
            }
          }
        },
      },
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues
        }]
      }
    })
  })
