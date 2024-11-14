function gen(){
    document.getElementById("code").innerHTML=""
    x=document.getElementById("name").value;
    y=document.getElementById("dob").value;
    xa=[]
    for(i=0;i<x.length;i++){
    xa+=x.charCodeAt(i);
    }
    console.log(xa)
    xa1=xa+"22092022"
    ya=y+"25092022"
    z=ya+xa1
    document.getElementById("code").innerHTML=z
}