/////////////////////////////////// JS SECTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// // Alert Hello World
// alert ("Hello World");

// // Using prompt to popup and take input and return data
// let name = prompt ("Hello", "");
// if (name != null)
//     {
//         document.getElementById("demo").innerHTML = "Hello " + name + ".";
//     }

// // Activity Variables Research
// let fname = prompt ("What is your first name?")
// let age = prompt ("How old are you?")
// alert ("Hello " + fname + " who is " + age + " years old.");

// let breakfast = "toast";
// let lunch = "sandwich";
// let dinner = "curry";
// console.log("Today i had " + breakfast + " for breakfast, a " + lunch + " for lunch, and " + dinner + " for dinner.");

// // Activity 2
// let fname1 = "May";
// let age1 = "28";
// let fshow = "Yellow Stone"
// console.log("I am " + age1 + " who loves " + fshow1);

// // Activity 3 Yesterday Meals
// let breakfast1 = "Toastie";
// let lunch1 = "Bortch";
// let dinner1 = "Chicken and Sweet Potato";
// console.log("Today i had " + breakfast1 + " for Breakfast, a " + lunch1 + " for Lunch, and " + dinner1 + " for Dinner.");
// breakfast = "Yogurt";
// console.log("Today i had " + breakfast1 + " for Breakfast, a " + lunch1 + " for Lunch, and " + dinner1 + " for Dinner.");


// let message = "Hello " + fname + " who is " + age + " years old.";
// console.log(message);

// // Activity Type Challenges
// let time = new Date("2025-04-22");
// console.log(time);

// // Activity Property & Method Challenge
// let myString = "Hello World"
// console.log(myString.length);
// console.log(myString.toUpperCase());
// console.log(myString.substring(5));
/////////////////////////////////// END JS SECTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\



/////////////////////////////////// WEEK3 - WEATHER APP SECTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const searchButton = document.getElementById('searchButton').addEventListener('click', fetchWeather);

// function fetchWeather()
//     {
//         const city = document.getElementById('cityInput').value;
//         if (city.trim() === '')
//             {
//                 document.getElementById('weatherDisplay').innerText = "Please enter your city's name.";
//                 return;
//             }
//         else
//             {
//                 document.getElementById('loading').style.display = 'block';
//                 document.getElementById('weatherDisplay').innerHTML = '';
//             }
        
//         document.getElementById('weatherDisplay').innerHTML = '';
//         const apiKey = '61199a8e3f0a261ab2384fb6ec9d69e2';
//         const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';
    

//     fetch(url)
//         .then(function(response) 
//             {
//                 if (response.ok) 
//                     {
//                         return response.json();
//                     } 
//                 else 
//                     {
//                         document.getElementById('weatherDisplay').innerText = 'City not found.';
//                         document.getElementById('loading').style.display = 'none';
//                     }
//             })
//         .then(function (data)
//             {
//                 if (!data) 
//                     return;
//                 displayWeather(data);
//             })
//     }
//     function displayWeather(data) {
//         const weatherBox = document.getElementById('weatherDisplay');
//         const temperature = data.main.temp;
//         const humidity = data.main.humidity;
//         const description = data.weather[0].description;
    
//         weatherBox.innerHTML =
//             '<p>Temperature: ' + temperature + '°C</p>' +
//             '<p>Humidity: ' + humidity + '%</p>' +
//             '<p>Condition: ' + description + '</p>';
            
//         document.getElementById('loading').style.display = 'none';
//     }
 /////////////////////////////////// END WEATHER APP SECTION \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\






















