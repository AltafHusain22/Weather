const apiKey = '02a5800095b4e31fcabc48b236b6ef1d'

let fetchData = []
const weatherDataFetch = (city) => { 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeather(data))
     
}

const displayWeather = data => { 
    console.log(data);

    const temparature = data.main.temp
    const weather = data.weather[0].main
    displayInnerText('temp', temparature)
    displayInnerText('lead', weather)
}


const displayInnerText = (id,innerText) => { 
    const temp = document.getElementById(id)
    temp.innerText = innerText
}

const searchCity = () => { 
    const city = document.getElementById('search-field')
    const typedCity = city.value 
    city.innerText = displayInnerText('cityName', typedCity)
    weatherDataFetch(typedCity)
   
}
weatherDataFetch('Dhaka')

