//To convert celcius to farenheit        
function temperatureCtoF(){
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius1").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit1").value = f
    }

//To convert farenheit to celcius
function temperatureFtoC(){
    //(FAH - 32) * 5/9
    var f = document.getElementById("fahrenheit2").value;
    var c = (f - 32) * 5/9
    document.getElementById("celsius2").value = c
    }

    //To convert pounds to kilograms
function weightPtoK(){
    //LB / 2.205
    var p = document.getElementById("pounds1").value;
    var kg = p / 2.205
    document.getElementById("kg1").value = kg
    }

    //To convert kilograms to pounds
function weightKtoP(){
    //KG x 2.205
    var kg = document.getElementById("kg2").value;
    var p = kg * 2.205
    document.getElementById("pounds2").value = p
    }



    //To convert kilometers to miles
function distanceKtoM(){
    //KM * 0.621371
    var km = document.getElementById("km1").value;
    var m = km * 0.621371
    document.getElementById("miles1").value = m
    }

//To convert miles to kilometers
function distanceMtoK(){
    //MI / 0.621371
    var m = document.getElementById("miles2").value;
    var km = m / 0.621371
    document.getElementById("km2").value = km
    }


    //Add event listeners to the buttons
document.getElementById("temperature").addEventListener("click", temperature)
document.getElementById("weight").addEventListener("click", weight)
document.getElementById("distance").addEventListener("click", distance)   