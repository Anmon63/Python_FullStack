const heroDiv=document.getElementById("hero")
heroDiv.innerHTML=
` <div class="character-card">
                <h4 class="name">Hero</h4>
                <img class="avatar" src="images/hero.jpeg">
                <p class="score">Score:<b>60</b></p>
                <div class="dice-container"><div class="dice">6</div></div>
            </div>`
const villainDiv=document.getElementById("villian")
villainDiv.innerHTML=
`<div class="character-card">
                <h4 class="name">Villian</h4>
                <img class="avatar" src="images/villian.jpeg">
                <p class="score">Score:<b>10</b></p>
                <div class="dice-container"><div class="dice">6</div></div>
            </div>`