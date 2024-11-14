

function abc(){
    var x=prompt("Enter the first number")
console.log(parseInt(x))
var y=prompt("Enter the second number")
console.log(parseInt(y))
    if (x>=y){
        document.getElementById("greater").innerHTML= +x+" is the largest number"
    }
    else{
        document.getElementById("greater").innerHTML=+y+" is the largest number" 
    }
}