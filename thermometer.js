
    
function convert () {
    let type = document.getElementById("type").value;
    console.log(type)
    let degrees = document.getElementById("ctof").value;
    console.log(degrees)
    let converted = 0;
    if(type === "farenheit"){
        converted = ((degrees * 9/5) + 32).toFixed(2) + " degrees Farenheit"
    } else if(type === "celsius") {
        converted = ((degrees - 32) * (5/9)).toFixed(2) + " degrees Celsius"
    }
    
   
    document.getElementById("result").innerHTML = converted;
}
