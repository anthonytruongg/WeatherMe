// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         console.log(`Fetching Weather Data from ${location}`)
//         // fetch('https://api.openweathermap.org/data/2.5/weather?q=riverside&appid=1628dc811b0923126ac52c94f0272b97')
//         if(location !== null) {
//             resolve('Successfully fetched data')
//             fetch('https://api.openweathermap.org/data/2.5/weather?q=riverside&appid=1628dc811b0923126ac52c94f0272b97')

//         } else {
//             reject('Location not found')
//         }
//     })
// }
function convertWeather (degrees) {
    return (degrees - 273.15) * 1.8 + 32
}

async function getWeather () {
    try {
    // const response = await makeRequest('Riverside')
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=eastvale&appid=1628dc811b0923126ac52c94f0272b97')
    const weatherData = await response.json()
    console.log(weatherData)
    console.log(weatherData.main.temp)
    const temp = convertWeather(weatherData.main.temp)
    console.log('temperature in F',temp)
    } catch {
        console.log('Error: Unable to fetch weather data')
    }
}

export default getWeather