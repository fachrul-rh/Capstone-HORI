const apiPage = {
    async render() {
      return `
      <div>
        <h2 class="title" tabindex="0">API Used</h2> 
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis minima adipisci ad necessitatibus magni hic, nostrum nesciunt magnam quae eligendi amet! Amet reiciendis deleniti architecto dolore laudantium delectus facere.Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis minima adipisci ad necessitatibus magni hic, nostrum nesciunt magnam quae eligendi amet! Amet reiciendis deleniti architecto dolore laudantium delectus facere.</p> 
      </div>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default apiPage;