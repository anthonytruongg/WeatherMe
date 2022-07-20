// Getting weather data from search input
function getLocation () {
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
// Searching for weather based on given city
async function getWeather (location) {
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1628dc811b0923126ac52c94f0272b97`)
    const weatherData = await response.json()
    console.log(weatherData)
    console.log(weatherData.main.temp)
    const temp = convertWeather(weatherData.main.temp)
    console.log('temperature in F',temp)
    } catch {
        console.log('Error: Unable to fetch weather data')
    }
}

// export default getWeather
export default getLocation