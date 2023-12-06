import './mainHTML.css'

export const Main = () => {
    const main = document.createElement('main');
    main.className = 'cv-main change-color';

    const wrapper = document.querySelector('#app');
    wrapper.appendChild(main);
}