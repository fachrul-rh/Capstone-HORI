import 'regenerator-runtime';
import './script/component/foot-er';
import './script/component/app-bar';
import './script/component/head-bar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './styles/main.css';
import './styles/responsive.css';
import './script/view/main';
import App from './script/view/main';

const app = new App({
    button: document.querySelector('.myNavToggler'),
    drawer: document.querySelector('.myNav'),
    content: document.querySelector('#main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});
   
window.addEventListener('load', () => {
    app.renderPage();
});