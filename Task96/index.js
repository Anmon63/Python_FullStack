import characterData from "./data.js"
import Character from "./Character.js"

function attack(){
    hero1.getDiceHtml()
    villian1.getDiceHtml()
    hero1.takeDamage(villian1.currentDiceScore)
    villian1.takeDamage(hero1.currentDiceScore)
    render()
    if(hero1.dead||villian1.dead){
        endGame()
    }
}
function endGame(){
    console.log("Game Over")
}

const hero1=new Character(characterData.hero)

const villian1=new Character(characterData.villian)
document.getElementById('attack-button').addEventListener('click',attack)



function render(){
    document.getElementById(hero1.element).innerHTML=hero1.getCharacterHtml()
    document.getElementById(villian1.element).innerHTML=villian1.getCharacterHtml()
}
render()
