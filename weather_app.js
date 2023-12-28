const apikey="5a6043984607d2235b45893f9beeddeb";
const form=document.querySelector("button");
form.addEventListener('click',(e)=>{
    e.preventDefault();
    const cityname=document.getElementById("city").value;
    getwether(cityname);
})
async function getwether(cityName){
    let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityName},&APPID=${apikey}`;
    console.log("wait");
    const response=await fetch(url);{     
    const data=await response.json();
    showWether(data);
}
}
function showWether(data){
    let imgicon="http://openwethermap.org/img/w/"+data.weather[0].icon+".png";
    console.log(data);
    city.value="";
    document.getElementById("wind-km").innerHTML="0 km/h";
    document.getElementById("speed").innerHTML="Wind speed";
    document.getElementById("deg").innerHTML="0&deg;c";
    document.getElementById("hum-per").innerHTML="0 %";
    document.getElementById("hum").innerHTML="Humidity";
    document.getElementById("humimg").innerHTML='<img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3231112/humidity-alt-icon-md.png" alt="" height="50px" width="50px"></img>';
    document.getElementById("wnd").innerHTML='<img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3255787/wind-icon-sm.png" alt="" height="50px" width="50px">';
    document.getElementById("b-img").innerHTML='<img src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/47919/sun-behind-rain-cloud-emoji-clipart-sm.png" alt="" height="130px" width="130px" id="image" >';
    document.getElementById("wind").style.paddingBottom="50px";
    document.getElementById("humidity").style.paddingBottom="50px";
    document.querySelector("#deg").innerText=Math.round(data.main.temp-273.15)+'°c';
    document.querySelector("#name").innerText=data.name;
    document.querySelector("#wind-km").innerText=data.wind.speed+" km/h";
    document.querySelector("#hum-per").innerText=data.main.humidity+" %";
}