import { fetchProvinsi, tampilProvinsi, fetchKota, tampilKota } from '../functions/prov-kota-fetch';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

// nyari element
const searchBtn = document.querySelector('.btn-search');

window.addEventListener('load', async () => {
  const provinsi = await fetchProvinsi();
  tampilProvinsi(provinsi);
});

document.addEventListener('change', async (e) => {
  if (e.target.classList.contains('provinsi')) {
    const idProv = e.target.value;
    console.log(idProv);
    searchBtn.dataset.idprov = idProv;
    const kota = await fetchKota(idProv);
    tampilKota(kota);
  }
});

//menampilkan route
const DrawerInitiator = {
  init({ button, drawer, content }) {
  },
};


class App {
  async renderPage() {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
    }
    constructor({ button, drawer, content }) {
      this._button = button;
      this._drawer = drawer;
      this._content = content;
  
      this._initialAppShell();
    }
  
    _initialAppShell() {
      DrawerInitiator.init({
        button: this._button,
        drawer: this._drawer,
        content: this._content,
      });
  
      // kita bisa menginisiasikan komponen lain bila ada
    }
}



export default App;
