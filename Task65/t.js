var arr=[]
function fruits(){
    arr=[]
    var data=document.getElementById("fr").value
    arr.push(data)
    
    localStorage.setItem("name",JSON.stringify(arr))
    for (i=0;i<arr.length;i++){
        document.getElementById("b1").innerHTML+=arr[i]+"<br>"
    }
}