const apiKey = "041c56649a298db06c50cdb15adbd336";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);
    console.log(data.length);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "sun.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "heavy-rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "fog.png";
    }
    else if(data.weather[0].main=="Haze"){
        weatherIcon.src = "drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
} 

searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);
});
