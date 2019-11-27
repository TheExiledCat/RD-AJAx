
let activate1 = document.getElementById('activate1');
let activate2 = document.getElementById('activate2');
let activate3 = document.getElementById('activate3');
activate1.addEventListener("click",getWeather1);
activate2.addEventListener("click",getWeather2);
activate3.addEventListener("click",getWeather3);
let result = document.getElementById('result');


let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key=";
let key = "demo";
let locatie = "&locatie=";
let geoLocation = "Amsterdam";
let url = apiAddress + key + locatie + geoLocation;

function getWeather1(){
    console.log(url);
    makeAjaxCall(url, "GET"). then (showWeather1, errorHandeler);
}

function showWeather1(JSONresponseFromAjax){
    result.innerHTML = JSONresponseFromAjax;
}

function getWeather2(){
    makeAjaxCall(url, "GET"). then (showWeather2, errorHandeler);
}

function showWeather2(JSONresponseFromAjax){
    let weatherObject = JSON.parse(JSONresponseFromAjax);
    let completeData = "";
    for(const [key,value] of Object.entries(weatherObject.liveweer[0])){
        console.log(`${key}: ${value}`);
        completeData += key + " : " + value + "<br>";
        result.innerHTML = completeData;
    }
}

function getWeather3(){
    console.log(url);
    makeAjaxCall(url, "GET"). then (showWeather3, errorHandeler);
}

function showWeather3(JSONresponseFromAjax){
    
    let weather = JSON.parse(JSONresponseFromAjax);
    let completedata = "<br>Locatie: " + weather.liveweer[0].plaats + "<br>Temperatuur: " +
        weather.liveweer[0].temp + " &#176;C <br>Verwachting: " +
        weather.liveweer[0].verw + " <br>Weerbeeld: " +
        weather.liveweer[0].samenv + "<br>" +
        "Kans op neerslag in procenten: " + weather.liveweer[0].d0neerslag + "%";
    
        result.innerHTML = completedata;
   

}
