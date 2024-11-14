

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
    document.getElementById(data.element).innerHTML=
    `<div class="character-card">
                <h4 class="name">${data.name}</h4>
                <img class="avatar" src="${data.avatar}">
                <p class="score">Score:<b>${data.score}</b></p>
                <div class="dice-container"><div class="dice">${data.diceRoll}</div></div>
            </div>`
}

renderCharacter(hero)
renderCharacter(villian)
