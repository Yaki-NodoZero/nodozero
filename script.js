document.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById("main-text");
  const fullText = "NodoZero. Il primo nodo. L'unico che conta.";
  const speed = 40;

  let index = 0;
  let currentText = "";

  textElement.textContent = "";

  function typeWriter() {
    if (index < fullText.length) {
      currentText += fullText[index];
      textElement.textContent = currentText;
      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
