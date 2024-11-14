let x=0
let y=0
document.getElementById("a2").innerHTML=x


document.getElementById("b2").innerHTML=y

function a31(){
    x+=1
    console.log(x)
    document.getElementById("a2").innerHTML=x
}
function a32(){
    x+=2
    console.log(x)
    document.getElementById("a2").innerHTML=x
}
function a33(){
    x+=3
    console.log(x)
    document.getElementById("a2").innerHTML=x
}


function b31(){
    y+=1
    document.getElementById("b2").innerHTML=y
}
b31()
function b32(){
    y+=2
    document.getElementById("b2").innerHTML=y
}
b32()
function b33(){
    y+=3
    document.getElementById("b2").innerHTML=y
}
b33()