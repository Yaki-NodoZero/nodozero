document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("main-text");

  const fullText = "Il\u00A0primo\u00A0nodo. L'unico\u00A0che\u00A0conta.";
  const speed = 40;

  let index = 0;

  textElement.textContent = "";

  function typeWriter() {
    if (index < fullText.length) {
      const currentChar = fullText[index];
      textElement.textContent += currentChar;
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
