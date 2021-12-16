import { teamTemplate } from '../../../templates/template-creator';

const aboutPage = {
  async render() {
    return `
      <div class="container">
        <h2 class="title" tabindex="0">Developer Team</h2>
        <div class="about-page container mt-5 mb-5">
          
        </div>
    </div>
      `;
  },

  async afterRender() {
    //membuat template about
    const aboutPage = document.querySelector('.about-page');
    aboutPage.innerHTML += teamTemplate();
  },
};

export default aboutPage;
