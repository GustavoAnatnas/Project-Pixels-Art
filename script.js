
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


