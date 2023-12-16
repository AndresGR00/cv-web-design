import { certificationsFunction, contactsFunction, experienceFunction, studiesFunction } from "../../data/headerButtonsFunctions";
import { getIsToggled } from "../toggleButton/toggleButton";
import "./hamburgerButton.css";

const switchMenu = () => {
  const main = document.querySelector('.cv-main');
  main.innerHTML = '';
  main.innerHTML = `
  <div class="${getIsToggled() ? "changed" : "original"} cv-hamburger-menu need-to-change">
    <a class="${getIsToggled() ? "changed" : "original"} cv-menu-item need-to-change" id="link-qualifications">Qualifications</a>
    <a class="${getIsToggled() ? "changed" : "original"} cv-menu-item need-to-change" id="link-experience">Experience</a>
    <a class="${getIsToggled() ? "changed" : "original"} cv-menu-item need-to-change" id="link-certifications">Certifications</a>
    <a class="${getIsToggled() ? "changed" : "original"} cv-menu-item need-to-change" id="link-contact">Contact Me</a>
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
