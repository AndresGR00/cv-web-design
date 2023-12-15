import { svgLogo } from "../../data/infoSVGs";
import { FirstDecoration } from "../mainFirstDecoration/mainFirstDecoration";
import { SecondDecoration } from "../mainSecondDecoration/mainSecondDecoration";
import { ThirdDecoration } from "../mainThirdDecoration/mainThirdDecoration";
import { Wolf } from "../mainWolf/mainWolf";
import { isToggledButton, setIsToggled } from "../toggleButton/toggleButton";
import "./logo.css";

export const renderMainLogo = () => {
  const main = document.querySelector('.cv-main');
  main.innerHTML = '';
  main.style.height = '100svh';

  setIsToggled(!false);
  isToggledButton();

  FirstDecoration();
  SecondDecoration();
  ThirdDecoration();
  Wolf();
}

export const Logo = (link, mission) => {
  const containerLogoA = document.createElement("a");
  containerLogoA.className = "cv-logo-container";
  containerLogoA.href = link;

  const externalCircle = document.createElement("div");
  externalCircle.className = "cv-logo-external-circle";
  const middleCircle = document.createElement("div");
  middleCircle.className = "cv-logo-middle-circle change-color";
  const internalCircle = document.createElement("div");
  internalCircle.className = "cv-logo-internal-circle";
  const logoImage = document.createElement("div");
  logoImage.className = "cv-logo-img change-color";
  logoImage.innerHTML = svgLogo;

  const header = document.querySelector("header");

  header.appendChild(containerLogoA);
  containerLogoA.appendChild(externalCircle);
  externalCircle.appendChild(middleCircle);
  middleCircle.appendChild(internalCircle);
  internalCircle.appendChild(logoImage);

  containerLogoA.addEventListener('click', mission)
};
