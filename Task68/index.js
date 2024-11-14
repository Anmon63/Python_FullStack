const heroElementId="hero"
const heroName="Hero"
const heroAvatar="images/hero.jpeg"
const heroScore="60"
const heroDiceRoll=6

const villianElementId="villian"
const villianName="villian"
const villianAvatar="images/villian.jpeg"
const villianScore="10"
const villianDiceRoll=4

function renderCharacter(elementId, name, avatar ,score, diceRoll){
    document.getElementById(elementId).innerHTML=
    `<div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src="${avatar}">
                <p class="score">Score:<b>${score}</b></p>
                <div class="dice-container"><div class="dice">${diceRoll}</div></div>
            </div>`
}

renderCharacter(heroElementId,heroName,heroAvatar,heroScore,heroDiceRoll)
renderCharacter(villianElementId,villianName,villianAvatar,villianScore,villianDiceRoll)

