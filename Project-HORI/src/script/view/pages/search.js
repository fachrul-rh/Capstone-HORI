import ShowSearchPage from '../../functions/prov-kota-fetch.js';
import { hideSelectLoading } from '../../functions/loadingPage';
import { createTemplateSearch } from '../../../templates/template-creator.js';

const searchPage = {
  async render() {
    return `
    <section id="searchPage">
      <div>
        <h2 class="title" tabindex="0">Search Hospital Room</h2>  
      </div>
      <div id="searchContent"></div>
    </section>
      `;
  },

  async afterRender() {
    //membaut template search
    const searchContainer = document.querySelector('#searchContent');
      searchContainer.innerHTML += createTemplateSearch(); //
    // ambil element
    const searchBtn = document.querySelector('.btn-search'),
      optionProv = document.querySelector('.provinsi'),
      optionKota = document.querySelector('.kota');

    const radio = document.querySelectorAll('.btn-check');
    let infoRs = ``;

    // document.getElementById('form-check-label1').setAttribute('onclick', `${checkRadio1()}`);
    // document.getElementById('form-check-label2').setAttribute('onclick', `${checkRadio2()}`);
    function cariTypeBed() {
      return radio[0].checked === true ? (searchBtn.dataset.tipebed = radio[0].value) : (searchBtn.dataset.tipebed = radio[1].value);
    }
    // function checkRadio1() {
    //   document.getElementById('covidRadios1').checked = 'checked';
    // }

    // function checkRadio2() {
    //   document.getElementById('covidRadios2').checked = 'checked';
    // }

    const tampilProvinsi = (provinsi) => {
      let dropdownProv = `<option value ="" disabled selected hidden>Pilih Provinsi</option>`;

      provinsi.forEach((provinsi) => {
        dropdownProv += `<option value ="${provinsi.id}" class="option-provinsi">${provinsi.name}</option>`;
      });
      optionProv.innerHTML = dropdownProv;
    };

    const tampilKota = (kota) => {
      hideSelectLoading(optionKota);
      let dropdownKota = `<option value="" disabled selected hidden>Pilih Kota/Kabupaten</option>`;

      kota.forEach((kota) => {
        dropdownKota += `<option value="${kota.id}" class="option-kota">${kota.name}</option>`;
      });
      optionKota.innerHTML = dropdownKota;
    };

    function tampilCardRs(rs) {
      let tipeBed = cariTypeBed();
      infoRs = `<h3 class="fw-bold mb-4 text-center">Daftar Rumah Sakit</h3>`;
      if (rs.length === 0) {
        infoRs += `<h5 class="fw-bold text-center">Data Tidak Ditemukan</h5>`;
      }

      rs.forEach((rs) => {
        let bed = rs.available_beds;

        if (tipeBed == 1) {
          rs.bed_availability > 0 ? tampilRsCovid(rs) : tampilRsCovidFull(rs);
        } else {
          tampilRsNonCovid(rs, bed);
        }
      });
      // console.log(infoRs);
      document.querySelector('.cardRs').innerHTML = infoRs;
    }

    function tampilRsCovid(rs) {
      infoRs += `<div class="card available mt-3">
                        <div class="card-body">
                          <div class="row">
                            <div class="col">
                              <h5 class="card-title">${rs.name}</h5>
                              <p class="card-text">${rs.address}</p>
                              ${(() => {
                                return rs.info == null ? `<p class="card-text text-muted">terjadi kesalahan pada data</p>` : `<p class="card-text text-muted">${rs.info}</p>`;
                              })()}
                            </div>
                            <div class="col-lg-3 d-lg-flex align-items-center justify-content-center">
                              <div class="availability mt-3 me-2 d-lg-flex align-items-center justify-content-center flex-wrap">
                                <h5>Tersedia : ${rs.bed_availability}</h5>
                                ${(() => {
                                  return rs.queue == 0 ? ` <p class="card-text text-muted">Tanpa Antrean</p> ` : `<p class="card-text text-muted">${rs.queue} Antrean</p>`;
                                })()}
                                
                              </div>
                            </div>
                          </div>
                          <div class="row justify-content-center mt-lg-4">
                            <div class="col d-flex align-items-center ">
                            ${(() => {
                              return rs.phone == null
                                ? ` <a href="/" onclick="return false;" class="btn btn-success fw-bold btn-phone disabled-link"><i class="fas fa-phone me-2"></i>Tidak Tersedia</a> `
                                : `<a href="tel:${rs.phone}" class="btn btn-success fw-bold btn-phone"><i class="fas fa-phone me-2"></i>${rs.phone}</a>`;
                            })()}
                              
                            </div>
                            <div class="col-lg-3 d-flex align-items-center justify-content-end">
                              <button type="button" class="btn btn-success fw-bold btn-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-idhospital="${
                                rs.id
                              }" data-tipebed="${cariTypeBed()}">Detail<i class="fas fa-arrow-right ms-2"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>`;
    }

    function tampilRsCovidFull(rs) {
      infoRs += `<div class="card full mt-3">
                        <div class="card-body">
                          <div class="row">
                            <div class="col">
                              <h5 class="card-title">${rs.name}</h5>
                              <p class="card-text">${rs.address}</p>
                              ${(() => {
                                return rs.info == null ? `<p class="card-text text-muted">terjadi kesalahan pada data</p>` : `<p class="card-text text-muted">${rs.info}</p>`;
                              })()}
                            </div>
                            <div class="col-lg-2 d-flex align-items-center justify-content-center">
                              <div class="availability d-flex align-items-center justify-content-center">
                                <h5>Penuh!</h5>
                              </div>
                            </div>
                          </div>
                          <div class="row mt-lg-4 ">
                            <div class="col">
                            ${(() => {
                              return rs.phone == null
                                ? ` <a href="/" onclick="return false;" class="btn btn-success fw-bold btn-phone disabled-link"><i class="fas fa-phone me-2"></i>Tidak Tersedia</a> `
                                : `<a href="tel:${rs.phone}" class="btn btn-success fw-bold btn-phone"><i class="fas fa-phone me-2"></i>${rs.phone}</a>`;
                            })()}
                            </div>
                            <div class="col-lg-3 d-flex align-items-center justify-content-end">
                              

                              <button type="button" class="btn btn-success fw-bold btn-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-idhospital="${
                                rs.id
                              }" data-tipebed="${cariTypeBed()}">Detail<i class="fas fa-arrow-right ms-2"></i></button>
                            </div>
                          </div>
                        </div>
                      </div>`;
    }

    function tampilRsNonCovid(rs, bed) {
      infoRs += `<div class="card mt-3">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title">${rs.name}</h5>
                <p class="card-text">${rs.address}</p>
                ${(() => {
                  return rs.info == null ? `<p class="card-text text-muted">terjadi kesalahan pada data</p>` : `<p class="card-text text-muted">${rs.info}</p>`;
                })()}
              </div>
            </div>
            <div class="row justify-content-center align-items-start">
            ${bed
              .map((bed) => {
                if (bed.available > 0) {
                  return `<div class="col-lg-4 mt-3 d-flex align-items-center justify-content-center">
                            <div class="modal-content border-0 modal-shadow d-flex align-items-center">
                              <div class="modal-body text-center">
                                <h4>${bed.available}</h4>
                                <h5>${bed.bed_class}</h5>
                                <p>${bed.room_name}</p>
                              </div>
                              <div class="modal-footer">
                                <p class="text-muted">${bed.info}</p>
                              </div>
                            </div>
                          </div>`;
                } else {
                  return `<div class="col-lg-4 mt-3 d-flex align-items-center justify-content-center ">
                            <div class="modal-content modal-shadow d-flex align-items-center full">
                              <div class="modal-body text-center ">
                                <h4 class="color-dg">${bed.available}</h4>
                                <h5>${bed.bed_class}</h5>
                                <p>${bed.room_name}</p>
                              </div>
                              <div class="modal-footer">
                                <p class="text-muted">${bed.info}</p>
                              </div>
                            </div>
                          </div>`;
                }
              })
              .join('')}
              
            </div>
            <div class="row mt-lg-4 justify-content-center">
              <div class="col d-flex align-items-center">
              ${(() => {
                return rs.phone == null
                  ? ` <a href="/" onclick="return false;" class="btn btn-success fw-bold btn-phone disabled-link"><i class="fas fa-phone me-2"></i>Tidak Tersedia</a> `
                  : `<a href="tel:${rs.phone}" class="btn btn-success fw-bold btn-phone"><i class="fas fa-phone me-2"></i>${rs.phone}</a>`;
              })()}
              </div>
              <div class="col-lg-3 d-flex align-items-center justify-content-end">
                

                <button type="button" class="btn btn-success fw-bold btn-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-idhospital="${
                  rs.id
                }" data-tipebed="${cariTypeBed()}">Detail<i class="fas fa-arrow-right ms-2"></i></button>
              </div>
            </div>
          </div>
        </div>`;
    }

    // fecthProvinsi
    const provinsi = await ShowSearchPage.fetchProvinsi();
    tampilProvinsi(provinsi);

    document.addEventListener('change', async (e) => {
      if (e.target.classList.contains('provinsi')) {
        const idProv = e.target.value;
        console.log(idProv);
        searchBtn.dataset.idprov = idProv;
        const kota = await ShowSearchPage.fetchKota(idProv);
        console.log(kota);
        tampilKota(kota);
      }
    });

    // Saat select kota dipilih, masukkan id kota yang dipilih pada button search
    document.addEventListener('change', (e) => {
      if (e.target.classList.contains('kota')) {
        searchBtn.disabled = false;
        const idKota = e.target.value;
        searchBtn.dataset.idkota = idKota;
        console.log(idKota);
        console.log(searchBtn);
      }
    });

    // Saat search button diklik, lakukan fetch data rs, lalu tampilkan data tersebut
    searchBtn.addEventListener('click', async function () {
      this.dataset.tipebed = cariTypeBed();
      const rs = await ShowSearchPage.fetchRs(this.dataset.idprov, this.dataset.idkota, this.dataset.tipebed);

      tampilCardRs(rs);
    });

    // document.addEventListener('click', async (e) => {
    //   e.preventDefault();
    //   document.getElementById('showHospital').innerHTML = showHospital;
    //   if (e.target.classList.contains('btn-search')) {
    //     const rs = await ShowSearchPage.fetchRs(e.target.dataset.idprov, e.target.dataset.idkota, e.target.dataset.tipebed);
    //     console.log(rs);
    //   }
    // });
  },
};

export default searchPage;
