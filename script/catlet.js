const refreshRate = 1000 / 60;
const maxXPosition = 650;
let rect = document.querySelector('.catletit');
let rectn = document.querySelector('.nazad');


let speedX = 1;
let positionX = 250;

function step() {
    positionX = positionX + speedX;
    if (positionX < 250) {
        speedX = 1;
        rectn.style.display = "none";
        rect.style.display = "block";
    }

    if (positionX > maxXPosition) {
        speedX = -1;
        rectn.style.display = "block";
        rect.style.display = "none";
    }


    rect.style.left = positionX + 'px';
    rectn.style.left = positionX + 'px';

    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);
