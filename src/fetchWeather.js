// Getting weather data from search input
export function getLocation () {
    const searchButton = document.getElementById('getLocation')
    searchButton.addEventListener('click', (e) => {
        e.preventDefault();
        const location = document.getElementById('location').value
        getWeather(location)
        console.log(location)
    })
}
// ---------------------------------------------------------------------------------------------------------------------
// Convert temperature from Kelvin to Fahrenheit
function convertWeather (degrees) {
    return (degrees - 273.15) * 1.8 + 32
}
// ---------------------------------------------------------------------------------------------------------------------
// Placing into Text
function setWeather (tempConverted, locationData, dateString, timeString, descriptionOne, descriptionTwo) {

    const city = document.getElementById('city')
    city.textContent = locationData

    const temp = document.getElementById('temp')
    temp.textContent = tempConverted + '°F'

    const date = document.getElementById('date')
    date.textContent = dateString

    const time = document.getElementById('time')
    time.textContent = timeString

    const mainDescription = document.getElementById('mainDescription')
    mainDescription.textContent = descriptionOne

    const secondaryDescription = document.getElementById('description')
    secondaryDescription.textContent = descriptionTwo


}
// ---------------------------------------------------------------------------------------------------------------------
// Searching for weather based on given city
export async function getWeather (location) {
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1628dc811b0923126ac52c94f0272b97`)
    const weatherData = await response.json()
    const locationData = location

    console.log(weatherData)
    console.log(weatherData.main.temp)

    const tempConverted = convertWeather(weatherData.main.temp).toFixed(2)
    console.log('temperature in F', tempConverted)

    const descriptionOne = weatherData.weather[0].main
    const descriptionTwo = weatherData.weather[0].description
        
    const time = new Date(weatherData.dt * 1000)
    const timeString = time.toLocaleTimeString()
    const dateString = time.toLocaleDateString()

    setWeather(tempConverted, locationData, dateString, timeString,  descriptionOne, descriptionTwo)
    
    } catch {
        console.log('Error: Unable to fetch weather data')
    }
}

// export default getWeather