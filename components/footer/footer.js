import './footer.css';

export const Footer = () => {
    const footer = document.createElement('footer');
    footer.className = 'cv-footer need-to-change original';

    const footerP = document.createElement('p');
    footerP.className = 'cv-footer-p';
    footerP.innerHTML = '© Developed by AG00';

    const wrapper = document.querySelector('#app');
    footer.appendChild(footerP)
    wrapper.appendChild(footer);
}