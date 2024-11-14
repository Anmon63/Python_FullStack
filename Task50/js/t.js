function convert(){
    var a=document.getElementById("inp").value
    console .log(a)
    var l= a*3.281
    console.log(l)
    let len=+a+"meter="+l+"feet|"+l+"feet="+a+"meter";
    document.getElementById("meter").innerHTML=len

    var v=a*0.264
    console.log(v)
    let vol=+a+"Litres="+v+"gallons|"+v+"gallons="+a+"Litres";
    document.getElementById("litre").innerHTML=vol

    var k=a*2.204
    console.log(k)
    let kg=+a+"Kilograms="+k+"Pounds|"+k+"Pounds="+a+"Kilograms";
    document.getElementById("kg").innerHTML=kg
}