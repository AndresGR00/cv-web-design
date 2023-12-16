import { getIsToggled } from "../components/toggleButton/toggleButton";
import data from "./cvInfo";
import "./headerButtonsFunctions.css";

export const studiesFunction = () => {
  const main = document.querySelector(".cv-main");
  main.innerHTML = "";
  main.classList.add("flex");

  const sectionContainerDiv = document.createElement("div");
  sectionContainerDiv.className = "cv-section-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "cv-title-container";
  const title = document.createElement("h2");
  title.className = getIsToggled() ? "cv-title-section changed need-to-change " : "cv-title-section original need-to-change ";
  title.innerHTML = "Qualifications";

  const infoContainer = document.createElement("div");
  infoContainer.className = "cv-info-container";

  data.studies.forEach((study) => {
    const card = document.createElement("div");
    card.className = getIsToggled() ? "cv-study-card changed need-to-change" : "cv-study-card original need-to-change";

    const name = document.createElement("p");
    name.className = "cv-study-name";
    name.innerHTML = `${study.name}`;
    card.appendChild(name);

    const place = document.createElement("p");
    place.className = getIsToggled() ? "cv-study-place changed need-to-change" : "cv-study-place original need-to-change";
    place.innerHTML = `${study.place}`;
    card.appendChild(place);

    const year = document.createElement("p");
    year.className = getIsToggled() ? "cv-study-year changed need-to-change" : "cv-study-year original need-to-change";
    year.innerHTML = `${study.years}`;
    card.appendChild(year);

    infoContainer.appendChild(card);
  });

  titleContainer.appendChild(title);
  sectionContainerDiv.appendChild(titleContainer);
  sectionContainerDiv.appendChild(infoContainer);
  main.appendChild(sectionContainerDiv);
};

export const experienceFunction = () => {
  const main = document.querySelector(".cv-main");
  main.innerHTML = "";
  main.classList.add("flex");

  const sectionContainerDiv = document.createElement("div");
  sectionContainerDiv.className = "cv-section-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "cv-title-container";
  const title = document.createElement("h2");
  title.className = getIsToggled() ? "cv-title-section changed need-to-change " : "cv-title-section original need-to-change ";
  title.innerHTML = "Experience";

  const infoContainer = document.createElement("div");
  infoContainer.className = "cv-info-container";

  data.experiences.forEach((experience) => {
    const card = document.createElement("div");
    card.className = getIsToggled() ? "cv-study-card changed need-to-change" : "cv-study-card original need-to-change";

    const name = document.createElement("p");
    name.className = "cv-study-name";
    name.innerHTML = `${experience.name}`;
    card.appendChild(name);

    const place = document.createElement("p");
    place.className = getIsToggled() ? "cv-study-place changed need-to-change" : "cv-study-place original need-to-change";
    place.innerHTML = `${experience.place}`;
    card.appendChild(place);

    const year = document.createElement("p");
    year.className = getIsToggled() ? "cv-study-year changed need-to-change" : "cv-study-year original need-to-change";
    year.innerHTML = `${experience.years}`;
    card.appendChild(year);

    infoContainer.appendChild(card);
  });

  titleContainer.appendChild(title);
  sectionContainerDiv.appendChild(titleContainer);
  sectionContainerDiv.appendChild(infoContainer);
  main.appendChild(sectionContainerDiv);
};

export const certificationsFunction = () => {
  const main = document.querySelector(".cv-main");
  main.innerHTML = "";
  main.classList.add("flex");

  const sectionContainerDiv = document.createElement("div");
  sectionContainerDiv.className = "cv-section-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "cv-title-container";
  const title = document.createElement("h2");
  title.className = getIsToggled() ? "cv-title-section changed need-to-change " : "cv-title-section original need-to-change ";
  title.innerHTML = "Certifications";

  const infoContainer = document.createElement("div");
  infoContainer.className = "cv-info-container";

  data.certifications.forEach((certificade) => {
    const card = document.createElement("div");
    card.className = getIsToggled() ? "cv-study-card changed need-to-change" : "cv-study-card original need-to-change";

    const name = document.createElement("p");
    name.className = "cv-study-name";
    name.innerHTML = `${certificade.name}`;
    card.appendChild(name);

    const place = document.createElement("p");
    place.className = getIsToggled() ? "cv-study-place changed need-to-change" : "cv-study-place original need-to-change";
    place.innerHTML = `${certificade.place}`;
    card.appendChild(place);

    const year = document.createElement("p");
    year.className = getIsToggled() ? "cv-study-year changed need-to-change" : "cv-study-year original need-to-change";
    year.innerHTML = `${certificade.years}`;
    card.appendChild(year);

    infoContainer.appendChild(card);
  });

  titleContainer.appendChild(title);
  sectionContainerDiv.appendChild(titleContainer);
  sectionContainerDiv.appendChild(infoContainer);
  main.appendChild(sectionContainerDiv);
};

export const contactsFunction = () => {
  const main = document.querySelector(".cv-main");
  main.innerHTML = "";
  main.classList.add("flex");

  const sectionContainerDiv = document.createElement("div");
  sectionContainerDiv.className = "cv-section-container";

  const titleContainer = document.createElement("div");
  titleContainer.className = "cv-title-container";
  const title = document.createElement("h2");
  title.className = getIsToggled() ? "cv-title-section changed need-to-change " : "cv-title-section original need-to-change ";
  title.innerHTML = "Contact Me";

  const infoContainer = document.createElement("div");
  infoContainer.className = "cv-info-container";

  data.contacts.forEach((contact) => {
    const card = document.createElement("div");
    card.className = getIsToggled() ? "cv-study-card changed need-to-change" : "cv-study-card original need-to-change";

    const name = document.createElement("p");
    name.className = "cv-study-name";
    name.innerHTML = `${contact.name}`;
    card.appendChild(name);

    const place = document.createElement("p");
    place.className = getIsToggled() ? "cv-study-place changed need-to-change" : "cv-study-place original need-to-change";
    place.innerHTML = `${contact.place}`;
    card.appendChild(place);

    infoContainer.appendChild(card);
  });

  titleContainer.appendChild(title);
  sectionContainerDiv.appendChild(titleContainer);
  sectionContainerDiv.appendChild(infoContainer);
  main.appendChild(sectionContainerDiv);
};
