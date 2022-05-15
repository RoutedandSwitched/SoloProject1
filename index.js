function roundToThree(n){
    return Math.round((n + Number.EPSILON) * 100) /100
}

function convertVal(){
    let userInput = document.getElementById("user-input").value
    document.getElementById("length-m").textContent = userInput + " Meters = " + 
        roundToThree(userInput*3.281) + " Feet"
    document.getElementById("length-ft").textContent = userInput + " Feet = "+ 
        roundToThree(userInput/3.281) + " Meters"
}
console.log(lengthm_el)
convertVal()