import './mainWolf.css';

export const Wolf = () => {
    const main = document.querySelector('main');
    const wolfContainer = document.createElement('div');
    wolfContainer.className = 'cv-wolf-container original';

    main.appendChild(wolfContainer);
}