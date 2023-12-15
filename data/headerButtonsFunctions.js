import data from "./cvInfo";
import './headerButtonsFunctions.css';

export const studiesFunction = () => {
  const main = document.querySelector(".cv-main");
  main.innerHTML = "";
  main.classList.add('flex');

  const sectionContainerDiv = document.createElement('div');
  sectionContainerDiv.className = 'cv-section-container';

  const titleContainer = document.createElement("div");
  titleContainer.className = "cv-title-container";
  const title = document.createElement("h2");
  title.innerHTML = "Qualifications";
  title.className = "cv-title-section change-color";

  const infoContainer = document.createElement("div");
  infoContainer.className = "cv-info-container";

  data.studies.forEach((study) => {
    const card = document.createElement("div");
    card.className = "cv-study-card change-color";

    
    const name = document.createElement("p");
    name.className = 'cv-study-name'
    name.innerHTML = `${study.name}`;
    card.appendChild(name);

    
    const place = document.createElement("p");
    place.className = 'cv-study-place change-color'
    place.innerHTML = `${study.place}`;
    card.appendChild(place);

    
    const year = document.createElement("p");
    year.className = 'cv-study-year change-color'
    year.innerHTML = `${study.years}`;
    card.appendChild(year);

    
    infoContainer.appendChild(card);
  });

  titleContainer.appendChild(title);
  sectionContainerDiv.appendChild(titleContainer);
  sectionContainerDiv.appendChild(infoContainer);
  main.appendChild(sectionContainerDiv);
};
