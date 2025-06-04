const apiKey = "61199a8e3f0a261ab2384fb6ec9d69e2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) 
{
    const response = await fetch(apiUrl + city + "&units=metric&appid=" + apiKey);

    if(response.status == 404)
        {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
    else
        {
            var data = await response.json();


            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds")
                {
                    weatherIcon.src = "/Weather/img/cloudy.png";
                }
            else if(data.weather[0].main == "Clear")
                {
                    weatherIcon.src = "/Weather/img/sun.png";
                }
            else if(data.weather[0].main == "Rain")
                {
                    weatherIcon.src = "/Weather/img/heavy-rain.png";
                }

                    document.querySelector(".weather").style.display = "block";
                    document.querySelector(".error").style.display = "none";
        }
}

searchBtn.addEventListener("click", ()=> 
    {
        checkWeather(searchBox.value);
    });

//Trigger search with Enter key
searchBox.addEventListener("keydown", function(event) 
{
    if (event.key === "Enter") 
        {
            event.preventDefault(); 
            checkWeather(searchBox.value);
        }
});
