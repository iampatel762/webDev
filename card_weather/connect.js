const apikey="e6ba0821075b6636ce3e04846697c9d1";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchText=document.querySelector('.searchBox input');
const searchIcon=document.querySelector('.searchBox button');
const weatherIcon=document.querySelector('#weather_img');
async function checkWheather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    let data= await response.json();
    console.log(data);
    document.querySelector("#city").innerHTML=data.name;
    document.querySelector('#temp').innerHTML=Math.round(data.main.temp)+"℃";
    document.querySelector('#humidity_percentage').innerHTML=data.main.humidity;
    document.querySelector('#wind_speed').innerHTML=data.wind.speed;

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="image/cloud.png";
    }
    else  if (data.weather[0].main=="Clear") {
        weatherIcon.src="image/clear_sky.png";
    }
    else  if (data.weather[0].main=="Drizzle") {
        weatherIcon.src="image/drizzling.png";
    }
    else  if (data.weather[0].main=="Mist") {
        weatherIcon.src="image/mist.png";
    }
    else  if (data.weather[0].main=="Rain") {
        weatherIcon.src="image/rain.png";
    }
    else {
        weatherIcon.value.src="image/snowflake.png";
    }
}
searchIcon.addEventListener('click',()=>{
    let inputText=searchText.value;
    checkWheather(inputText);
})