import './hamburgerButton.css'

export const HamburgerButton = () => {
    const header = document.querySelector('header');

    const img = document.createElement('img');
    img.className = 'cv-hamburger-button';
    img.src = 'https://res.cloudinary.com/dbinlquvz/image/upload/v1701884839/4_CV_Web_Design/hamburguer-button_Mesa_de_trabajo_1_foyhf0.png';

    header.appendChild(img);
}