import { fetchProvinsi, tampilProvinsi, fetchKota, tampilKota } from '../functions/prov-kota-fetch';

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
