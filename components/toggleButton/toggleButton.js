import "./toggleButton.css";

let isToggled = false;

export const ToggleButton = () => {
  const toggleContainer = document.createElement("div");
  toggleContainer.className = "cv-toggle-container";
  const toggleCircle = document.createElement("div");
  toggleCircle.className = "cv-toggle-circle";

  const header = document.querySelector("header");

  header.appendChild(toggleContainer);
  toggleContainer.appendChild(toggleCircle);

  toggleContainer.addEventListener("click", isToggledButton);
};

const isToggledButton = () => {
  const toggleCircle = document.querySelector(".cv-toggle-circle");
  const elementsToChangeColor = document.querySelectorAll(".change-color");
  const wolfContainer = document.querySelector(".cv-wolf-container");

  isToggled = !isToggled;

  if (isToggled) {
    toggleCircle.style.backgroundColor = "var(--cv-second-white-color)";
    toggleCircle.style.transform = "translateX(27px)";

    elementsToChangeColor.forEach((element) => {
      const computedStyles = window.getComputedStyle(element);
      const backgroundColor =
        computedStyles.getPropertyValue("background-color");
      const color = computedStyles.getPropertyValue("color");
      const fill = computedStyles.getPropertyValue("fill");
      const background = computedStyles.getPropertyValue("background");

      // Resetear estilos a los valores originales
      element.style.backgroundColor = "";
      element.style.color = "";
      element.style.fill = "";

      if (backgroundColor === "rgb(20, 20, 20)") {
        element.style.backgroundColor = "var(--cv-second-white-color)";
      }

      if (color === "rgb(20, 20, 20)") {
        element.style.color = "var(--cv-second-white-color)";
      }

      if (backgroundColor === "rgb(252, 247, 232)") {
        element.style.backgroundColor = "var(--cv-second-black-color)";
      }

      if (color === "rgb(252, 247, 232)") {
        element.style.color = "var(--cv-second-black-color)";
      }

      if (fill === "rgb(20, 20, 20)") {
        element.style.fill = "var(--cv-second-white-color)";
      }
      wolfContainer.classList.remove("original");
      wolfContainer.classList.add("changed");
    });
  } else {
    toggleCircle.style.backgroundColor = "#141414"; // Negro
    toggleCircle.style.transform = "translateX(0px)";

    elementsToChangeColor.forEach((element) => {
      const computedStyles = window.getComputedStyle(element);
      const backgroundColor =
        computedStyles.getPropertyValue("background-color");
      const color = computedStyles.getPropertyValue("color");
      const fill = computedStyles.getPropertyValue("fill");

      // Resetear estilos a los valores originales
      element.style.backgroundColor = "";
      element.style.color = "";
      element.style.fill = "";

      if (backgroundColor === "rgb(252, 247, 233)") {
        element.style.backgroundColor = "var(--cv-black-color)";
      }

      if (color === "rgb(252, 247, 233)") {
        element.style.color = "var(--cv-black-color)";
      }

      if (backgroundColor === "rgb(18, 18, 18)") {
        element.style.backgroundColor = "var(--cv-white-color)";
      }

      if (color === "rgb(18, 18, 18)") {
        element.style.color = "var(--cv-white-color)";
      }

      if (fill === "rgb(252, 247, 233)") {
        element.style.fill = "var(--cv-black-color)";
      }
      wolfContainer.classList.remove("changed");
      wolfContainer.classList.add("original");
    });
  }
};