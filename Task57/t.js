let g=0
let c=10
function i1(){
    if(c>0){
        c--;
        var a="Stock:"+c;
        document.getElementById("a21").innerHTML = a
        g=g+45
        document.getElementById("a14").innerHTML="$"+g
    }
}
let d=4
function i2(){
    if(d>0){
        d--;
        var e="Stock:"+d;
        document.getElementById("a22").innerHTML = e
        g=g+35
        document.getElementById("a14").innerHTML="$"+g
    }
}
let e=5
function i3(){
    if(e>0){
        e--;
        var f="Stock:"+e;
        document.getElementById("a23").innerHTML = f
        g=g+50
        document.getElementById("a14").innerHTML="$"+g
    }    
}
