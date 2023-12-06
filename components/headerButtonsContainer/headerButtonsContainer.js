import './headerButtonsContainer.css';

export const HeaderButtonsContainer = () => {
    const header = document.querySelector('header');

    const containerButtons = document.createElement("div");
    containerButtons.className = "cv-header-menu-buttons";
    header.appendChild(containerButtons);
}