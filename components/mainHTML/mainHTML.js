import './mainHTML.css'

export const Main = () => {
    const main = document.createElement('main');
    main.className = 'cv-main original';

    const wrapper = document.querySelector('#app');
    wrapper.appendChild(main);
}