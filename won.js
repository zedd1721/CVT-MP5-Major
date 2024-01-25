const rulesBox = document.querySelector('.rulesbox');
const rules = document.querySelector('#rules');
const closerules = document.querySelector('.closebtn');

const playAgain = document.querySelector('#playagain')
const nextPage = document.querySelector('#win');

playAgain.addEventListener('click', ()=>{
    window.location.href = 'index.html';
})
rules.addEventListener('click', ()=>{
    rulesBox.style.display = 'block';
});
closerules.addEventListener('click', ()=>{
    rulesBox.style.display = 'none';
});