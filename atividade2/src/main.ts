const lampada = document.getElementById('lampada') as HTMLImageElement;
const botaoAcender = document.getElementById('acender') as HTMLButtonElement;
const botaoDesligar = document.getElementById('desligar') as HTMLButtonElement;

const lampadaAcesaSrc = './src/images/acesa.jpg';
const lampadaApagadaSrc = './src/images/apagada.jpg';
const lampadaQuebradaSrc = './src/images/quebrada.jpg';

let contadorAcesa = 0;
let quebrada = false;
let acesa = false;

const acenderLampada = () => {
    if (!quebrada && !acesa) {
        lampada.src = lampadaAcesaSrc;
        contadorAcesa++;
        acesa = true
        botaoAcender.disabled = true;

        if (contadorAcesa >= 3) {
            quebrarLampada();
        }
    }
};

const desligarLampada = () => {
    if (!quebrada) {
        lampada.src = lampadaApagadaSrc;
        botaoAcender.disabled = false;
        acesa = false;
    }
};

const quebrarLampada = () => {
    lampada.src = lampadaQuebradaSrc;
    quebrada = true;
    botaoAcender.disabled = true;
    botaoDesligar.disabled = true;
};

botaoAcender.addEventListener('click', acenderLampada);
botaoDesligar.addEventListener('click', desligarLampada);
