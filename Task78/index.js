const hero={
    element:"hero",
    name:"Hero",
    avatar:"images/hero.jpeg",
    score:"60",
    diceRoll:[3,2,1],
    diceCount:3
}

const villian={
    element:"villian",
    name:"Villian",
    avatar:"images/villian.jpeg",
    score:"10",
    diceRoll:[4],
    diceCount:1
}



function renderCharacter(data){
    const{element,name,avatar,score,diceRoll,diceCount}=data
    const diceHtml=diceRoll.map(function(diceValue){
        return `<div class="dice">${diceValue}</div>`
    }).join('')
    console.log(diceHtml)

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

renderCharacter(hero)
renderCharacter(villian)


