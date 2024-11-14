function validate(){
    var name=document.getElementById("name").value
    var z=/[A-Za-z]/
    var m=name.match(z)
    if (m==null) 
        document.getElementById("name1").innerHTML="not char"
    else
        document.getElementById("name1").innerHTML=""

    var email=document.getElementById("email").value
    var y = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var n=email.match(y)
    if (n==null)
        document.getElementById("email1").innerHTML="not email"
    else
        document.getElementById("email1").innerHTML=""

    var phone=document.getElementById("Phno").value
    var x=/^[0-9]+$/
    var o=phone.match(x)
    if(o==null)
        document.getElementById("Phno1").innerHTML="not Phno"
    else
        document.getElementById("Phno1").innerHTML=""
    return false
}