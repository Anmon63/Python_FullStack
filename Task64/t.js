function add(){
    var named = document.getElementById("name").value;
    localStorage.setItem("name",named)
}
function show(){
    var sho=localStorage.getItem("name")
    document.getElementById("sh").innerHTML=sho
}
function del(){
    localStorage.removeItem("name")
    document.getElementById("sh").innerHTML=""   
}
