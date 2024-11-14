function add(){
    a = document.getElementById('x').value;
    b = document.getElementById('y').value;
    c = parseInt(a) + parseInt(b);
    document.getElementById("display").innerHTML=c
}
function sub(){
    a = document.getElementById('x').value;
    b = document.getElementById('y').value;
    c = parseInt(a) - parseInt(b);
    document.getElementById("display").innerHTML=c
}
function mul(){
    a = document.getElementById('x').value;
    b = document.getElementById('y').value;
    c = parseInt(a) * parseInt(b);
    document.getElementById("display").innerHTML=c
}
function div(){
    a = document.getElementById('x').value;
    b = document.getElementById('y').value;
    c = parseInt(a) / parseInt(b);
    document.getElementById("display").innerHTML=c
}