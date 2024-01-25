const rulesBox = document.querySelector('.rulesbox');
const rules = document.querySelector('#rules');
const closerules = document.querySelector('.closebtn');

const winPage = document.querySelector('#win');

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