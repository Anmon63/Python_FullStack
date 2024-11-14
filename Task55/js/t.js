
function oe(){
    var num=prompt("Enter the number")
console.log(num)
    if(num%2==0){
        document.getElementById("oddeven").innerHTML="It's an even number"
    }
    else{
        document.getElementById("oddeven").innerHTML="It's an odd number"
    }
}