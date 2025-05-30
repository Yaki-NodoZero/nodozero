document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById('projects-toggle');
  const panel = document.getElementById('projects-panel');
  const closeBtn = document.getElementById('projects-close');

  // tendina chiusa
  panel.classList.remove('open');
  toggleBtn.classList.remove('open');

  // Typewriter per il titolo principale
  const textElement = document.getElementById("main-text");
  const fullText = "Il\u00A0primo\u00A0nodo. L'unico\u00A0che\u00A0conta.";
  const speed = 40;
  let index = 0;
  textElement.textContent = "";
  function typeWriter() {
    if (index < fullText.length) {
      textElement.textContent += fullText[index++];
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();

  // Funzioni di toggle tendina
  function openPanel() {
    panel.classList.add('open');
    toggleBtn.classList.add('open');
  }
  function closePanel() {
    panel.classList.remove('open');
    toggleBtn.classList.remove('open');
  }

  toggleBtn.addEventListener('click', () => {
    panel.classList.contains('open') ? closePanel() : openPanel();
  });
  closeBtn.addEventListener('click', closePanel);
});
