import "./mainSecondDecoration.css";
import data from "../../data/cvInfo";

export const SecondDecoration = () => {
    
  const main = document.querySelector("main");

  const secondDecorationContainer = document.createElement("div");
  secondDecorationContainer.className = "cv-second-decoration";
  secondDecorationContainer.innerHTML = `<h1 class="cv-title change-color">${data.name}</h1>
    <h2 class="cv-subtitle">${data.description}</h2>`;

  main.appendChild(secondDecorationContainer);
};
