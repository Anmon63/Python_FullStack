

const hero={
    element:"hero",
    name:"Hero",
    avatar:"images/hero.jpeg",
    score:"60",
    diceRoll:6
}

const villian={
    element:"villian",
    name:"Villian",
    avatar:"images/villian.jpeg",
    score:"10",
    diceRoll:4
}



function renderCharacter(data){
    const{element,name,avatar,score,diceRoll}=data
    document.getElementById(element).innerHTML=
    `<div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src="${avatar}">
                <p class="score">Score:<b>${score}</b></p>
                <div class="dice-container"><div class="dice">${diceRoll}</div></div>
            </div>`
}

renderCharacter(hero)
renderCharacter(villian)
