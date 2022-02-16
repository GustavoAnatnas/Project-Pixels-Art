
let color = document.getElementsByClassName("color")
    color[0].style.background = 'black';
    color[1].style.background = 'pink';
    color[2].style.background = 'blue';
    color[3].style.background = 'yellow';


function criaDivs(divs){
const quadroPixel = document.getElementById('pixel-board');
    for (let index = 0; index < divs; index++) {
    let divs = document.createElement('div');
    divs.className = 'pixel'; 
    quadroPixel.appendChild(divs);
}
}
criaDivs(25);

function corInicial(){
    const black = document.getElementById('inicial');
    black.classList.add('selected');
}
corInicial();

function selecionaCor(event) {
    const coisa1 = document.querySelector('.selected');
    const recebeCor = window.getComputedStyle(coisa1, null);
    const backgroundcolor = recebeCor.getPropertyValue('background-color');
    const clicado = event.target;
    clicado.style.backgroundColor = backgroundcolor;
}
function pintar() {
    const arrayPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < arrayPixel.length; index++) {
     const bloco = arrayPixel[index];
     bloco.addEventListener('click', selecionaCor);
    }  
}
pintar();
function selecionarPaleta(event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
}
document.getElementById('inicial').addEventListener('click', selecionarPaleta);
document.getElementById('inicial2').addEventListener('click', selecionarPaleta);
document.getElementById('inicial3').addEventListener('click', selecionarPaleta);
document.getElementById('inicial4').addEventListener('click', selecionarPaleta);

