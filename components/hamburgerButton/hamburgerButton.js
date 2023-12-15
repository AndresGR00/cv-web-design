import { certificationsFunction, contactsFunction, experienceFunction, studiesFunction } from "../../data/headerButtonsFunctions";
import "./hamburgerButton.css";

const switchMenu = () => {
  const main = document.querySelector('.cv-main');
  main.innerHTML = '';
  main.innerHTML = `
  <div class="cv-hamburger-menu change-color">
    <a class="cv-menu-item change-color" id="link-qualifications">Qualifications</a>
    <a class="cv-menu-item change-color" id="link-experience">Experience</a>
    <a class="cv-menu-item change-color" id="link-certifications">Certifications</a>
    <a class="cv-menu-item change-color" id="link-contact">Contact Me</a>
  </div>
`;
const linkQualifications = document.getElementById('link-qualifications');
const linkExperience = document.getElementById('link-experience');
const linkCertifications = document.getElementById('link-certifications');
const linkContact = document.getElementById('link-contact');

linkQualifications.addEventListener('click', studiesFunction);
linkExperience.addEventListener('click', experienceFunction);
linkCertifications.addEventListener('click', certificationsFunction);
linkContact.addEventListener('click', contactsFunction);
};

export const HamburgerButton = () => {
  const header = document.querySelector("header");

  const img = document.createElement("img");
  img.className = "cv-hamburger-button";
  img.src =
    "https://res.cloudinary.com/dbinlquvz/image/upload/v1701884839/4_CV_Web_Design/hamburguer-button_Mesa_de_trabajo_1_foyhf0.png";

  header.appendChild(img);

  img.addEventListener("click", switchMenu);
};
