// O player atual usa Google Drive, sem API pública para eventos de pausa.
// Para ativar o aviso personalizado, configure uma URL direta MP4/WebM.
const VIDEO_URL = '';

const video = document.querySelector('#lesson');
const overlay = document.querySelector('#pause-overlay');
const resume = document.querySelector('#resume');
document.querySelector('#year').textContent = new Date().getFullYear();

if (VIDEO_URL) {
  video.src = VIDEO_URL;
  video.hidden = false;
  document.querySelector('#drive-player').hidden = true;
}

video.addEventListener('pause', () => {
  if (video.currentTime > 0 && !video.ended) {
    overlay.hidden = false;
    resume.focus();
  }
});
video.addEventListener('play', () => { overlay.hidden = true; });
video.addEventListener('ended', () => { overlay.hidden = true; });
resume.addEventListener('click', async () => {
  try {
    await video.play();
    video.focus();
  } catch {
    overlay.hidden = true;
    video.focus();
  }
});
