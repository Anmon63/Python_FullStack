
let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"];
x=[]
y=[]
function fight(){
   x!=y
    x=(fighters[(Math.floor(Math.random()*fighters.length))]);
    y=(fighters[(Math.floor(Math.random()*fighters.length))]);
    document.getElementById("fighter1").innerHTML=x
    document.getElementById("fighter2").innerHTML=y
} 
fight()
