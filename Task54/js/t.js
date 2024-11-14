
function abc(){
    var mark=prompt("Enter Your marks")
console.log(parseInt(mark))
    if (mark >=90){
        document.getElementById("grade").innerHTML="Congrats You got an A grade"
    }
    else if(mark >= 80){
        document.getElementById("grade").innerHTML="Keep it up You got an B grade"
    }
    else if(mark>=70){
        document.getElementById("grade").innerHTML="Good You got an C grade"
    }
    else if(mark>=60){
        document.getElementById("grade").innerHTML="You got an D grade"
    }
    else if(mark<60){
        document.getElementById("grade").innerHTML="You got f grade"
    }
}