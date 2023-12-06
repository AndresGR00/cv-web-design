import "./headerButtons.css";

export const HeaderButton = (img, link, buttonFunction) => {
  const containerButtons = document.querySelector(".cv-header-menu-buttons");

  const a = document.createElement("a");
  a.className = "cv-header-menu-buttons-a";
  a.href = link;

  const image = document.createElement("div");
  image.className = "cv-header-menu-buttons-img change-color";
  image.innerHTML = img;

  a.appendChild(image);
  containerButtons.appendChild(a);

  a.addEventListener('click', buttonFunction)
};
