const landingPage = {
  async render() {
    return `
      <div class="container">
        <h2 class="title" tabindex="0">Welcome to HORI</h2>
        <p class="text-justify paragraph">Aplikasi berbasis web ini berguna untuk mencari ketersediaan ruang kamar rumah sakit di Indonesia baik rumah sakit yang khusus Covid-19 dan non Covid-19. Aplikasi ini kami buat karena minimnya informasi di masyarakat yang menyangkut tentang ketersediaan kamar kosong di rumah sakit, bahkan masyarakat harus datang terlebih dahulu untuk memastikan apakah masih tersedia kamar di rumah sakit tersebut atau tidak. Hal ini akan memberatkan pasien yang jauh dari rumah sakit, sayangnya mungkin rumah sakit yang dia tuju ternyata sudah over kapasitas. Untuk  itu aplikasi ini dibuat bertujuan untuk memudahkan masyarakat mendapatkan informasi tersebut.</p>
        <a href="#/search-page"><button type="button" class="btn btn-dark"><i class="icon fas fa-search"></i>CARI RUMAH SAKIT</button></a>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default landingPage;
