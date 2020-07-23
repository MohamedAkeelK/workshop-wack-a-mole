

let score = 0;
var scoreDisplay = document.getElementById('score');

console.log(scoreDisplay);

var holes = document.getElementsByClassName("hole");

setInterval(function() {
var randomHoles = Math.floor(Math.random() * holes.length);
holes[randomHoles].classList.toggle('mole');
}, 1000);

const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent){
    if(clickEvent.target.matches('.mole')) {
        //increase score
        clickEvent.target.classList.remove('mole')
        //remove the mole
        score++
        //display the score
        scoreDisplay.innerText = score;
    }
})

