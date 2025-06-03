const searchButton = document.getElementById('searchButton').addEventListener('click', fetchWeather);

function fetchWeather()
    {
        const city = document.getElementById('cityInput').value;
        if (city.trim() === '')
            {
                document.getElementById('weatherDisplay').innerText = "Please enter your city's name.";
                return;
            }
        else
            {
                document.getElementById('loading').style.display = 'block';
                document.getElementById('weatherDisplay').innerHTML = '';
            }
        
        document.getElementById('weatherDisplay').innerHTML = '';
        const apiKey = '61199a8e3f0a261ab2384fb6ec9d69e2';
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';
    

    fetch(url)
        .then(function(response) 
            {
                if (response.ok) 
                    {
                        return response.json();
                    } 
                else 
                    {
                        document.getElementById('weatherDisplay').innerText = 'City not found.';
                        document.getElementById('loading').style.display = 'none';
                    }
            })
        .then(function (data)
            {
                if (!data) 
                    return;
                displayWeather(data);
            })
    }
    function displayWeather(data) {
        const weatherBox = document.getElementById('weatherDisplay');
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
    
        weatherBox.innerHTML =
            '<p>Temperature: ' + temperature + '°C</p>' +
            '<p>Humidity: ' + humidity + '%</p>' +
            '<p>Condition: ' + description + '</p>';
            
        document.getElementById('loading').style.display = 'none';
    }
     





















