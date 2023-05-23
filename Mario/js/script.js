const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clauds = document.querySelector('.clauds');
const clauds2 = document.querySelector('.clauds2');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const claudsPosition = +window.getComputedStyle(clauds).left.replace('px', '');
    const clauds2Position = +window.getComputedStyle(clauds2).left.replace('px', '');

    console.log(marioPosition)

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 195){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clauds.style.animation = 'none';
        clauds.style.left = `${claudsPosition}px`;
        
        clauds2.style.animation = 'none';
        clauds2.style.left = `${clauds2Position}px`;

        mario.src = './png/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', jump);
