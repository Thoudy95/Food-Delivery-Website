const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?lat='
const API_KEY = '&appid=53632572bc4aebc8264f9c0ee811d4ee'
const API_UNITS = '&units=metric'

const getWeather = () => {
    const city = input.value || 'London'
    const URL = API_LINK + city + API_KEY + API_LINK

    axios.get(URL).then(res => {
        const temp = res.data.main.temp
        const hum = res.data.main.humidity
        cityName.textContent = res.data.name
    })
}

getWeather()

