function getScores() {
    const userScore = parseInt(localStorage.getItem('userScore')) || 0;
    const compScore = parseInt(localStorage.getItem('compScore')) || 0;
    return { userScore, compScore };
}


function updateScores(scores) {
    localStorage.setItem('userScore', scores.userScore);
    localStorage.setItem('compScore', scores.compScore);
}

let scores = getScores();
document.querySelector('#user').textContent = `${scores.userScore}`;
document.querySelector('#comp').textContent = `${scores.compScore}`;

// localStorage.clear()



const animation = 
`<div class="winanimation" id="Animate">
    <div class="circle c1"></div>
    <div class="circle c2"></div>
    <div class="circle c3"></div>
</div>`

const rulesBox = document.querySelector('.rulesbox');
const rules = document.querySelector('#rules');
const closerules = document.querySelector('.closebtn');

let winPage = document.querySelector('#win');

const playAgain = document.querySelector('#playagain');

playAgain.addEventListener('click', ()=>{
    document.querySelector('.game').style.display = 'block';
    document.querySelector('.result-wrap').style.display = 'none';
})

rules.addEventListener('click', ()=>{
    rulesBox.style.display = 'block';
});
closerules.addEventListener('click', ()=>{
    rulesBox.style.display = 'none';
});

winPage.addEventListener('click', ()=>{
    window.location.href = 'won.html';
})


let hasInteracted = localStorage.getItem('hasInteracted');
if(!hasInteracted){
    rulesBox.style.display = 'block';
}





//=================Draw===============
function drawGame(){
    winPage.style.display = 'none';
    document.querySelector('#wintext').textContent = 'TIE UP';
    document.querySelector('#wintext').style.whiteSpace = 'nowrap';
    document.querySelector('#againstpc').textContent = ''
    document.querySelector('#playagain').textContent = 'REPLAY'
}

// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// -------CODE FOR DISPLAYING---------
// ---------------------------
// ---------------------------
// ---------------------------


function userChoicedisplay(userChoice){
    const userSelected = document.querySelector('.user-selected');
    const userdisplay = `
        <p class="pickedtext">YOU PICKED</p>
        <div class="user-selected-option" id="${userChoice}">
            <img src="/Assests/homePage/${userChoice}.png" alt="">
        </div>
    `;
    userSelected.innerHTML = userdisplay;

}



function genCompChoice(){
    let choiceArr = ["rock", "paper", "scissor"];
    let ranIdx = parseInt(Math.random()*3);
    let compChoice = choiceArr[ranIdx];
    
    const pcSelected =document.querySelector('.comp-selected');
    const pcdisplay = `
        <p class="pickedtext">PC PICKED</p>
        <div class="user-selected-option" id="${compChoice}">
            <img src="/Assests/homePage/${compChoice}.png" alt="">
        </div>
    `;
    pcSelected.innerHTML = pcdisplay;
    return compChoice;
}


// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------
// ---------------------------


function showWinner(userWin){
    const scores = getScores();
    if(userWin){
        scores.userScore += 1;
        updateScores(scores);
        winPage.style.display = 'inline';
        document.querySelector('#playagain').textContent = 'PLAY AGAIN'
        document.querySelector('#wintext').textContent = 'YOU WIN'
        document.querySelector('#user').textContent = `${scores.userScore}`;
        document.querySelector('.user-selected').innerHTML += animation;
    }else{
        scores.compScore += 1;
        updateScores(scores);
        winPage.style.display = 'none';
        document.querySelector('#playagain').textContent = 'PLAY AGAIN'
        document.querySelector('#wintext').textContent = 'YOU LOST'
        document.querySelector('#comp').textContent = `${scores.compScore}`;
        document.querySelector('.comp-selected').innerHTML += animation;

    }
}


function playGame(userChoice){
    userChoicedisplay(userChoice);
    let compChoice = genCompChoice();
    console.log(userChoice);
    console.log(compChoice);
    document.querySelector('#againstpc').textContent = 'AGAINST PC';

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
            if(userChoice === "rock"){
                //paper, scissors
                userWin = compChoice === "scissor" ? true:false;
            }else if(userChoice === "paper"){
                //rock, scissors
                userWin = compChoice === "rock" ? true:false;
            }else if(userChoice === "scissor"){
                //rock, paper
                userWin = compChoice ==="paper"? true:false;
            }
            showWinner(userWin);
    }
    

}












let choices = document.querySelectorAll('.option');
choices.forEach((choice)=>{

    choice.addEventListener('click',()=>{

        document.querySelector('.game').style.display = 'none';
        document.querySelector('.result-wrap').style.display = 'block';

        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
})