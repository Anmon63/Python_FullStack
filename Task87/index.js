const hero={
    element:"hero",
    name:"Hero",
    avatar:"images/hero.jpeg",
    score:"60",
    diceCount:3
}

const villian={
    element:"villian",
    name:"Villian",
    avatar:"images/villian.jpeg",
    score:"10",
    diceCount:1
}

function Character(data){
    this.element=data.element,
    this.name=data.name,
    this.avatar=data.avatar,
    this.score=data.score,
    this.diceCount=data.diceCount,

    this.getCharacterHtml=function(){
        const{element,name,avatar,score,diceCount}=this
        const diceHtml= getDiceHtml(diceCount)
        document.getElementById(element).innerHTML=
            `<div class="character-card">
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

function getDiceHtml(diceCount){
    return getDiceRollArray(diceCount).map(function(num){
        return `<div class="dice">${num}</div>`
    }).join('')
}

const hero1=new Character(hero)
hero1.getCharacterHtml()
const villian1=new Character(villian)
villian1.getCharacterHtml()

