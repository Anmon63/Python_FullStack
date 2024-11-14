

const hero={
    element:"hero",
    name:"Hero",
    avatar:"images/hero.jpeg",
    score:"60",
    diceRoll:6,
    diceCount:3
}

const villian={
    element:"villian",
    name:"Villian",
    avatar:"images/villian.jpeg",
    score:"10",
    diceRoll:4,
    diceCount:1
}



function renderCharacter(data){
    const{element,name,avatar,score,diceRoll,diceCount}=data
    let diceHtml=''
    for(let i=0;i<diceCount;i++){
        diceHtml +=`<div class="dice">6</div>`
    }
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
