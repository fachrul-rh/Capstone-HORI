const aboutPage = {
  async render() {
    return `
      <div class="container">
        <h2 class="title" tabindex="0">About Developer</h2>
        <p class="text-justify paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis minima adipisci ad necessitatibus magni hic, nostrum nesciunt magnam quae eligendi amet! Amet reiciendis deleniti architecto dolore laudantium delectus facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis minima adipisci ad necessitatibus magni hic, nostrum nesciunt magnam quae eligendi amet! Amet reiciendis deleniti architecto dolore laudantium delectus facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis minima adipisci ad necessitatibus magni hic, nostrum nesciunt magnam quae eligendi amet! Amet reiciendis deleniti architecto dolore laudantium delectus facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis minima adipisci ad necessitatibus magni hic, nostrum nesciunt magnam quae eligendi amet! Amet reiciendis deleniti architecto dolore laudantium delectus facere.</p>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default aboutPage;
