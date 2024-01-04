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

  const filterButtonsContainer = document.createElement("div");
  filterButtonsContainer.className = "cv-filter-buttons";

  // Botones de filtro
  const degreeButton = createFilterButton("Degree", "degree");
  const masterButton = createFilterButton("Master", "master");
  const otherButton = createFilterButton("Other", "other");
  const resetButton = createFilterButton("Show All", "all");

  filterButtonsContainer.appendChild(degreeButton);
  filterButtonsContainer.appendChild(masterButton);
  filterButtonsContainer.appendChild(otherButton);
  filterButtonsContainer.appendChild(resetButton);

  const infoContainer = document.createElement("div");
  infoContainer.className = "cv-info-container";

  data.studies.forEach((study) => {
    createCard(infoContainer, study);
  });

  titleContainer.appendChild(title);
  sectionContainerDiv.appendChild(titleContainer);
  sectionContainerDiv.appendChild(filterButtonsContainer);
  sectionContainerDiv.appendChild(infoContainer);
  main.appendChild(sectionContainerDiv);

  
  degreeButton.addEventListener("click", () => filterStudies("Degree"));
  masterButton.addEventListener("click", () => filterStudies("Master"));
  otherButton.addEventListener("click", () => filterStudies("Other"));
  resetButton.addEventListener("click", () => filterStudies("All"));
};

// Filtrar estudios según botón
const filterStudies = (type) => {
  const infoContainer = document.querySelector(".cv-info-container");
  infoContainer.innerHTML = "";

  data.studies.forEach((study) => {
    if (
      (type === "Degree" && study.name.includes("Degree")) ||
      (type === "Master" && study.name.includes("Master")) ||
      (type === "Other" && !study.name.includes("Degree") && !study.name.includes("Master")) ||
      type === "All"
    ) {
      createCard(infoContainer, study);
    }
  });
};

// Crear tarjetas (una vez filtradas)
const createCard = (container, study) => {
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

  container.appendChild(card);
};

// Botones de filtro
const createFilterButton = (label, value) => {
  const button = document.createElement("button");
  button.className = getIsToggled() ? "cv-filter-button changed need-to-change " : "cv-filter-button original need-to-change ";
  button.innerHTML = label;
  button.setAttribute("data-filter", value);
  return button;
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
    
    if (contact.name === "GitHub" || contact.name === "LinkedIn") {
      const link = document.createElement("a");
      link.className = getIsToggled() ? "cv-study-place changed need-to-change" : "cv-study-place original need-to-change";
      link.href = contact.link;
      link.textContent = contact.place;
      place.appendChild(link);
    } else {
      place.innerHTML = `${contact.place}`;
    }

    card.appendChild(place);

    infoContainer.appendChild(card);
  });

  titleContainer.appendChild(title);
  sectionContainerDiv.appendChild(titleContainer);
  sectionContainerDiv.appendChild(infoContainer);
  main.appendChild(sectionContainerDiv);
};
