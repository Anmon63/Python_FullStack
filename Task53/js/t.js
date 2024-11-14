
function abc(){
    var age=prompt("What is Your age","Enter your age")
console.log(parseInt(age))
if (age>=18){
    document.getElementById("display").innerHTML="You can drive";
}
else{
        document.getElementById("display").innerHTML="You cannot drive";
}
}