const myImage = document.querySelector("img"); /* seleciona a imagem e a guarda na variável */

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/firefox-icon.png") {
    myImage.setAttribute("src", "imagens/firefox2.png");
  } else {
    myImage.setAttribute("src", "imagens/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla é legal, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
