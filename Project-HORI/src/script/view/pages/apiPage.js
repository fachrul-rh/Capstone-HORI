const apiPage = {
  async render() {
    return `
      <div class="container">
        <h2 class="title" tabindex="0">API Used</h2> 
        <p class="text-justify paragraph">Semua data -  data rumah sakit yang diperoleh kami dapatkan dari <a href="https://github.com/satyawikananda/rs-bed-covid-indo-api/" target="_blank" rel="noopener"><strong>Satya Wikananda</strong></a>. API ini bertujuan untuk menampilkan data-data ketersediaan rumah sakit yang berada di Indonesia, selain itu API ini juga menampilkan daftar rumah sakit yang berada di seluruh Indonesia. Untuk mengetahui daftar-daftar endpoint yang tersedia, Anda bisa langsung menuju ke <a href="https://rs-bed-covid-api.vercel.app/" target="_blank" rel="noopener"><strong>Daftar Endpoint</strong></a>. Kami developer mengucapkan banyak terima kasih karena dengan API tersebut aplikasi website ini dapat terbentuk.</p> 
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default apiPage;
