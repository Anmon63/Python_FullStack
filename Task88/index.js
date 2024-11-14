const hero={
    element:"hero",
    name:"Hero",
    avatar:"images/hero.jpeg",
    score:"60",
    diceCount:3
}
const heroCopy={}
Object.assign(heroCopy,hero)
console.log(heroCopy)

const villian={
    element:"villian",
    name:"Villian",
    avatar:"images/villian.jpeg",
    score:"10",
    diceCount:1
}

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

function getDiceRollArray(diceCount){
    return new Array(diceCount).fill(0).map(function(){
        return Math.floor(Math.random()*6)+1
    })
}



const hero1=new Character(hero)

const villian1=new Character(villian)


function render(){
    document.getElementById(hero1.element).innerHTML=hero1.getCharacterHtml()
    document.getElementById(villian1.element).innerHTML=villian1.getCharacterHtml()

}
render()



