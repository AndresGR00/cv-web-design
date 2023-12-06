import './header.css';

export const Header = () => {
    const header = document.createElement('header');
    header.className = 'cv-header change-color';

    const wrapper = document.querySelector('#app');
    wrapper.appendChild(header);
}