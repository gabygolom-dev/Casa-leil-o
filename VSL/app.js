document.querySelector('#year').textContent = new Date().getFullYear();

// Captura eventos dos elementos <video> inseridos dinamicamente pelo player.
// Iframes de outra origem precisam de uma API documentada do provedor;
// não interpretamos mensagens ou cliques genéricos como eventos de pausa.
const frame = document.querySelector('#video-frame');
const overlay = document.querySelector('#pause-overlay');
const resume = document.querySelector('#resume');
const resumeError = document.querySelector('#resume-error');
let pausedVideo = null;

function closePauseMessage() {
  overlay.hidden = true;
  resumeError.hidden = true;
}

frame.addEventListener('pause', (event) => {
  const video = event.target;
  if (!(video instanceof HTMLVideoElement) || video.currentTime <= 0 ||
      video.ended || video.seeking || video.error) return;
  pausedVideo = video;
  resumeError.hidden = true;
  overlay.hidden = false;
  resume.focus({ preventScroll: true });
}, true);

for (const eventName of ['play', 'ended', 'emptied']) {
  frame.addEventListener(eventName, (event) => {
    if (event.target === pausedVideo) closePauseMessage();
  }, true);
}

resume.addEventListener('click', async () => {
  if (!pausedVideo?.isConnected) {
    closePauseMessage();
    return;
  }
  resume.disabled = true;
  try {
    // play() é chamado pelo gesto do usuário para funcionar também no celular.
    await pausedVideo.play();
    closePauseMessage();
  } catch {
    resumeError.hidden = false;
  } finally {
    resume.disabled = false;
  }
});
