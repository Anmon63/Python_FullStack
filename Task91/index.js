import characterData from "./data.js"
import Character from "./Character.js"

function attack(){
    console.log('attack button is working')
    render()
}

const hero1=new Character(characterData.hero)

const villian1=new Character(characterData.villian)
document.getElementById('attack-button').addEventListener('click',attack)



function render(){
    document.getElementById(hero1.element).innerHTML=hero1.getCharacterHtml()
    document.getElementById(villian1.element).innerHTML=villian1.getCharacterHtml()
}
render()
