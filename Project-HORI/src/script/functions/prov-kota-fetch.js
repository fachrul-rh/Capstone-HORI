import dataSource from '../data/data-source';
import { selectLoading, pageLoading } from './loadingPage';



class ShowSearchPage {
  static async fetchProvinsi() {
    const optionProv = document.querySelector('.provinsi');

    console.log(optionProv)
    selectLoading(optionProv);
    try {
      const response = await fetch(dataSource.GET_PROVINSI);
      const provinsi = await response.json();

      return provinsi.provinces;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchKota(idProv) {
    const optionKota = document.querySelector('.kota');
    selectLoading(optionKota);
    try {
      const response = await fetch('https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=' + idProv);
      const cities = await response.json();

      return cities.cities;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchRs(idProv, idKota, tipeBed) {
    pageLoading();
    try {
      const response = await fetch('https://rs-bed-covid-api.vercel.app/api/get-hospitals?provinceid=' + idProv + '&cityid=' + idKota + '&type=' + tipeBed);
      const rs = await response.json();

      return rs.hospitals;
    } catch (err) {
      console.log(err);
    }
  }

  static async fetchDetailRs(idHospital, tipeBed) {
    try {
      const response = await fetch('https://rs-bed-covid-api.vercel.app/api/get-bed-detail?hospitalid=' + idHospital + '&type=' + tipeBed);
      const detailRs = await response.json();
      return detailRs.data;
    } catch (e) {
      console.log(e);
    }
  }
}

export default ShowSearchPage;
