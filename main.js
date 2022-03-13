
    let apikey= "cd62f1cbb84a5c5f4e46d04dfa9c9ccc"

    function weather(city)
    {fetch("http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=cd62f1cbb84a5c5f4e46d04dfa9c9ccc&units=metric")
     .then(res => {
         return res.json()
     })
     .then(data => {
        dWeather(data)
     })
 
 } 
 


 function dWeather(data){
     const {name} = data
     const {icon,description} = data.weather[0]
     const{temp}=data.main
     const {humidity}=data.main
     const {speed}=data.wind;
     document.querySelector(".city").innerHTML= name
     document.querySelector(".icon").src= "http://openweathermap.org/img/wn/"+icon+"@2x.png"
     document.querySelector(".description").innerHTML= description
     document.querySelector(".temp").innerHTML= displayTemp(temp) +"°C"
     document.querySelector(".humidity").innerHTML= "Humidity : "+humidity+ " % "
     document.querySelector(".wind").innerHTML= "Wind Speed : "+speed+"Km/h"
             }

             function displayTemp(temp){
                 
return Math.round(temp)
            }
            function input (){
                weather(document.querySelector("#input").value)
            }
        let button = document.querySelector("#button")
        button.addEventListener("click",function(){
            return input()
        })
           
             weather("london")

  


    
