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
    const endMessage =hero1.score ===0 && villian1.score === 0?"No Winners" : hero1.score>0?"Hero is the winner":"Villian is the winner"
    const endEmoji = hero1.score>0?"🎉" :"💀"
    document.body.innerHTML=`<div class="end-game">
    <h2>Game Over</h2>
    <h3>${endMessage}</h3>
    <p class="end-emoji">${endEmoji}</p>
    </div>`
}


const hero1=new Character(characterData.hero)

const villian1=new Character(characterData.villian)
document.getElementById('attack-button').addEventListener('click',attack)



function render(){
    document.getElementById(hero1.element).innerHTML=hero1.getCharacterHtml()
    document.getElementById(villian1.element).innerHTML=villian1.getCharacterHtml()
}
render()
