import dataSource from '../data/data-source';

class ShowSearchPage {
  static async fetchProvinsi() {
    try {
      const response = await fetch(dataSource.GET_PROVINSI);
      const provinsi = await response.json();

      return provinsi.provinces;
    } catch (error) {
      console.log(error);
    }
  }

  static async fetchKota(idProv) {
    try {
      const response = await fetch('https://rs-bed-covid-api.vercel.app/api/get-cities?provinceid=' + idProv);
      const cities = await response.json();

      return cities.cities;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ShowSearchPage;
