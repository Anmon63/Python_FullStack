import {getDiceRollArray} from "./utils.js"
function Character(data){
    
    Object.assign(this,data)
    this.getDiceHtml=function(diceCount){
        return getDiceRollArray(diceCount).map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
    }
    this.getCharacterHtml=function(){
        const{element,name,avatar,score,diceCount}=this
        const diceHtml= this.getDiceHtml(diceCount)
        return `<div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src="${avatar}">
                <p class="score">Score:<b>${score}</b></p>
                <div class="dice-container">
                ${diceHtml}
                </div>
            </div>`
    }
}
export default Character