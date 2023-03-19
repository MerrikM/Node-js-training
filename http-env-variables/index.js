const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function getWeather() {
    let city = readline.question('Введите город (на латинице), в котором хотите узнать погоду: ', (city) => {
        const myAPIKey = process.env.myAPIKey
        const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${city}`
        fetch(`${url}`)
            .then(function(response) {return response.json()})
            .then(function(data) {
                console.log(`Город: ${data.location.name}`,
                            `\nСтрана: ${data.location.country}`,
                            `\nМестное время: ${data.location.localtime}`, 
                            `\nМестная погода: ${data.current.weather_descriptions}`)
            })
            .catch(error => console.log('error', error))
        readline.close()
    })
}
getWeather()