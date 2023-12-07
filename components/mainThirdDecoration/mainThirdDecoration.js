import "./mainThirdDecoration.css";

const blackCircle = `<svg class="change-color" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 397.43 397.43">
<path d="M198.62 391.53C92.47 391.53 6.12 305.18 6.12 199S92.47 6.53 198.62 6.53 391.12 92.89 391.12 199s-86.36 192.53-192.5 192.53Zm0-380C95.23 11.53 11.12 95.64 11.12 199s84.11 187.5 187.5 187.5 187.5-84.11 187.5-187.5S302 11.53 198.62 11.53Z"/>
</svg>`;

export const ThirdDecoration = () => {
  const main = document.querySelector("main");
  const thirdDecorationContainer = document.createElement("div");
  thirdDecorationContainer.className = "cv-third-decoration-container";

  const blackCircleSVG = document.createElement("div");
  blackCircleSVG.className = "cv-main-black-circle-one";
  blackCircleSVG.innerHTML = blackCircle;

  thirdDecorationContainer.appendChild(blackCircleSVG);
  main.appendChild(thirdDecorationContainer);
};

