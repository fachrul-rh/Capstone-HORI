import dataSource from '../data/data-source';
import { hideSelectLoading } from './loadingPage';

// ambil element
const optionProv = document.querySelector('.provinsi');
const optionKota = document.querySelector('.kota');

const fetchProvinsi = async () => {
  try {
    const response = await fetch(dataSource.GET_PROVINSI);
    const provinsi = await response.json();

    return provinsi.provinces;
  } catch (error) {
    console.log(error);
  }
};

const tampilProvinsi = (provinsi) => {
  let dropdownProv = `<option value ="" disabled selected hidden>Pilih Provinsi</option>`;

  provinsi.forEach((provinsi) => {
    dropdownProv += `<option value ="${provinsi.id}" class="option-provinsi">${provinsi.name}</option>`;
  });
  optionProv.innerHTML = dropdownProv;
};

const fetchKota = async (idProv) => {
  try {
    const response = await fetch('https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=' + idProv);
    const cities = await response.json();

    return cities.cities;
  } catch (error) {
    console.log(error);
  }
};

const tampilKota = (kota) => {
  hideSelectLoading(optionKota);
  let dropdownKota = `<option value="" disabled selected hidden>Pilih Kota/Kabupaten</option>`;

  kota.forEach((kota) => {
    dropdownKota += `<option value="${kota.id}" class="option-kota">${kota.name}</option>`;
  });
  optionKota.innerHTML = dropdownKota;
};

export { fetchProvinsi, tampilProvinsi, fetchKota, tampilKota };
