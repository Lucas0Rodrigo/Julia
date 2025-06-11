/**
 * Script para "chover" emojis de coração na página.
 * Basta colar este código no console do navegador ou incluir no seu arquivo JS.
 */

function createHeart() {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-2em';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.pointerEvents = 'none';
    heart.style.userSelect = 'none';
    heart.style.zIndex = 9999;
    heart.style.transition = 'transform 3s linear, opacity 3s linear';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(${window.innerHeight + 100}px)`;
        heart.style.opacity = 0;
    }, 10);

    setTimeout(() => {
        heart.remove();
    }, 3100);
}

// Cria corações a cada 200ms
setInterval(createHeart, 200);

function atualizarTempo() {
    const inicio = new Date('2023-03-09T00:00:00');
    const agora = new Date();

    // Calcula anos completos considerando anos bissextos
    let anos = agora.getFullYear() - inicio.getFullYear();
    let aniversarioEsteAno = new Date(agora.getFullYear(), inicio.getMonth(), inicio.getDate());
    if (agora < aniversarioEsteAno) {
        anos--;
        aniversarioEsteAno = new Date(agora.getFullYear() - 1, inicio.getMonth(), inicio.getDate());
    }

    let diff = agora - aniversarioEsteAno;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= dias * (1000 * 60 * 60 * 24);

    const horas = Math.floor(diff / (1000 * 60 * 60));
    diff -= horas * (1000 * 60 * 60);

    const minutos = Math.floor(diff / (1000 * 60));
    diff -= minutos * (1000 * 60);

    const segundos = Math.floor(diff / 1000);

    let tempoStr = '';
    if (anos > 0) {
        tempoStr += `${anos} ano${anos > 1 ? 's' : ''}, `;
    }
    tempoStr += `${dias} dia${dias !== 1 ? 's' : ''}, ${horas} hora${horas !== 1 ? 's' : ''}, ${minutos} minuto${minutos !== 1 ? 's' : ''} e ${segundos} segundo${segundos !== 1 ? 's' : ''}`;

    const tempoSpan = document.getElementById('tempo');
    if (tempoSpan) {
        tempoSpan.textContent = tempoStr;
    }
}

setInterval(atualizarTempo, 1000);
atualizarTempo();