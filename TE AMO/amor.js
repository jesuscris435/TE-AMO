
const flores = document.querySelector('.flores');
const corazones = document.querySelector('.corazones');
const simbolos = ['🌸','💮','💖','💕','🌷','❤️','🌹'];

function crearElementos(container) {
 for (let i = 0; i < 25; i++) {
 let span = document.createElement('span');
     span.textContent = simbolos[Math.floor(Math.random() * simbolos.length)];
     span.style.left = Math.random() * 100 + '%';
     span.style.animationDuration = (5 + Math.random() * 5) + 's';
     span.style.fontSize = (1 + Math.random() * 2) + 'rem';
  container.appendChild(span);
   }
}

    crearElementos(flores);
    crearElementos(corazones);
  