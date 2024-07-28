
let result=document.getElementById("result")


function getweather(){
    let api_key="9f926ad934c0a70f3665e95abebde8c9"
    let city_name=document.getElementById("cityname")
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name.value}&appid=${api_key}`)
    
    
    .then(data=>data.json())
    

    .then(data => 
        {
           // console.log(data)
       document.getElementById("result").innerHTML=`current temp is ${res.data.main.temp}`
        } )

    .catch(err => 
    {   
      //  console.log(err)
    })
    }


