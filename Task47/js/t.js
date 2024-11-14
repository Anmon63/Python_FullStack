

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]

x=console.log(fruit)
document.getElementById("fri").innerHTML=x

function fru(){
    let apple_shelfj=[]
let orange_shelfj=[]
    
    for(i=0;i<=fruit.length;i++){
        if(fruit[i]=="🍎"){
            apple_shelfj.push(fruit[i])
            document.getElementById("apple_shelf").innerHTML=apple_shelfj
        }
    else{
            orange_shelfj.push(fruit[i])
            document.getElementById("orange_shelf").innerHTML=orange_shelfj
        }
        
    }
}
fru()
