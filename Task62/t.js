function validate(){
    var x=document.getElementById("pass").value
    var re1=/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/
    var re2=/^[a-zA-Z0-9]+$/
    if(x.match(re1)&&x.length>12){
        a="Strong"
        let b=a.fontcolor("green")
        document.getElementById("s").innerHTML=b
    }
    else if(x.match(re2)&&x.length<12&&x.length>=6){
        c="Medium"
        let d=c.fontcolor("orange")
        document.getElementById("s").innerHTML=d
    }
    else if(x.length<4||x.match(re2)){
        e="Weak"
        let f=e.fontcolor("red")
        document.getElementById("s").innerHTML=f
    }
    return false
}
