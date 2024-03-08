const apikey = "f602d2a6788c204014e5ff01528059c4" ;

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" ;







const searchBox = document.querySelector('.search input') ;
const searchBtn = document.querySelector('.search button') ;
const weatherIcon = document.querySelector('.weather-icon') ;











async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`) ;
    var data = await response.json();

    console.log(data);





    
document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + '°c';
document.querySelector(".humidity").innerHTML= data.main.humidity + '%';
document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";






if(data.weather[0].main == "clouds") {
    weatherIcon.src = "/clouds.webp"
}else if(data.weather[0].main == "Clear") {
    weatherIcon.src = "/clear.webp"
}else if(data.weather[0].main == "Rain") {
    weatherIcon.src = "/rain.webp"
}else if(data.weather[0].main == "Drizzle") {
    weatherIcon.src = "/drizzle.webp"
}else if(data.weather[0].main == "Mist") {
    weatherIcon.src = "/mist.webp"
}else if(data.weather[0].main == "Snow") {
    weatherIcon.src = "/snow.webp"
}




  
}

searchBtn.addEventListener('click' , ()=> {

    checkWeather(searchBox.value)

})



