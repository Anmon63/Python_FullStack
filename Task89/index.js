import characterData from "./data.js"
import Character from "./Character.js"


const hero1=new Character(characterData.hero)

const villian1=new Character(characterData.villian)


function render(){
    document.getElementById(hero1.element).innerHTML=hero1.getCharacterHtml()
    document.getElementById(villian1.element).innerHTML=villian1.getCharacterHtml()
}
render()