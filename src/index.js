// function makeRequest(location) {
//     return new Promise((resolve, reject) => {
//         // This promise executes first
//         console.log(`Making request to ${location}`)
//         if(location === 'Google') {
//             resolve('Google says hi')
//         } else {
//             reject('We can only talk to Google')
//         }
//     })
// }

// function processRequest(response) {
//     return new Promise((resolve, reject) => {
//         console.log(`Processing response from ${response}`)
//         resolve(`Extra information + ${response}`)
//     })
// }


// async function doWork() {
//     try{
//         const response = await makeRequest('Facebook')
//         console.log('Response Received')
//         const processedResponse = await processRequest(response)
//         console.log(processedResponse)
//     } catch (err) {
//         console.log(err)
//     }
// }

// doWork()
// import getWeather from './fetchWeather';
import getWeather from './fetchWeather';
getWeather(); 