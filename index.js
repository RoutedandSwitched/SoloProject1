function roundToThree(n){
    return Math.round((n + Number.EPSILON) * 100) /100
}

function convertVal(){
    let userInput = document.getElementById("user-input").value
    document.getElementById("length-meter").textContent = userInput + " Meters = " + 
        roundToThree(userInput*3.281) + " Feet"
    document.getElementById("length-feet").textContent = userInput + " Feet = "+ 
        roundToThree(userInput/3.281) + " Meters"
    document.getElementById("vol-liter").textContent = userInput + " Liters = "+ 
        roundToThree(userInput/3.7854) + " Gallons"
    document.getElementById("vol-gal").textContent = userInput + " Gallons = "+ 
        roundToThree(userInput*3.7854) + " Liters"
    document.getElementById("mass-kilo").textContent = userInput + " Kilos = "+ 
        roundToThree(userInput*2.204623) + " Pounds"
    document.getElementById("mass-lbs").textContent = userInput + " Pounds = "+ 
        roundToThree(userInput/3.7854) + " Kilos"
}
console.log(lengthm_el)
convertVal()