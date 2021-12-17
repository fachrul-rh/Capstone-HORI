const createTemplateSearch = () => `
<div class="container">    
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <div class="form-check form-check-inline border rounded p-2 " id="form-check-label1">
            <input class="form-check-input btn-check" type="radio" name="jenis" id="covidRadios1" value="1" checked/>
            <label class="form-check-label" for="covidRadios1">RS Bed Covid-19</label>
          </div>          
        </div>
        <div class="col-md-6 mb-3">
          <div class="form-check form-check-inline border rounded p-2 mr-md-3 " id="form-check-label2">
            <input class="form-check-input btn-check" type="radio" name="jenis" id="covidRadios2" value="2" />
            <label class="form-check-label" for="covidRadios2">RS Bed Non Covid-19</label>
          </div>
        </div>
      </div>    

      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Provinsi</label>
        </div>
        <select class="custom-select provinsi" id="inputGroupSelect01">
          <option value="" disabled selected hidden>Pilih Provinsi</option>
        </select>
      </div>
      <div class="input-group mb-3 mt-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Kota/Kabupaten</label>
        </div>
        <select class="custom-select kota" id="inputGroupSelect01" disabled>
          <option value="" disabled selected hidden class="text-muted">Pilih Provinsi Dahulu</option>
        </select>
      </div>        
          <button type="button" class="btn btn-dark btn-lg btn-search my-btn" disabled>Search</button>        
      </div>
    </section>
    <section id="hospital">
      <div class="container">
        <div class="row mt-5 justify-content-center">
          <div class="col-lg-10 col-12 cardRs"></div>
        </div>
      </div>
`;

const teamTemplate = () => `
<div class="row no-gutters">
  <div class="col-md-4 col-lg-4"><img src="./dev1.jpg" alt="Fachrul Rozi Hamonangan Harahap"></div>
    <div class="col-md-8 col-lg-8">
        <div class="d-flex flex-column">
            <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                <h2 class="display-5 my-name">Fachrul Rozi Hamonangan Harahap</h2>
            </div>
            <div class="p-3 bg-black text-white">
                <h6>Web designer &amp; Developer</h6>
            </div>
            <div class="d-flex flex-row text-white">
              <div class="p-4 bg-primary text-center skill-block">
                  <p><a href="https://www.linkedin.com/in/fachrul-rozi-hamonangan-harahap-772282187/" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a></p>
              </div>
              <div class="p-3 bg-success text-center skill-block">
                  <p><a href="https://github.com/fachrul-rh" target="_blank" rel="noopener"><i class="fab fa-github"></i></a></p>
              </div>
              <div class="p-3 bg-warning text-center skill-block">
                <p><a href="https://www.instagram.com/faruulll/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></p>
              </div>
              <div class="p-3 bg-danger text-center skill-block">
                <p><a href="mailto:fachrulstroid@gmail.com"><i class="fas fa-envelope"></i></a></p>
              </div>
            </div>
        </div>
    </div>
  </div>
  </div>
  <div class="container mt-5 mb-5">
  <div class="row no-gutters">
  <div class="col-md-8 col-lg-8">
  <div class="d-flex flex-column">
    <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
        <h2 class="display-5">Muhamad Dian Rahendra</h2>
    </div>
    <div class="p-3 bg-black text-white">
        <h6 style="text-align:end;">Web designer &amp; Developer</h6>
    </div>
      <div class="d-flex flex-row text-white">
          <div class="p-4 bg-primary text-center skill-block">
              <p><a href="https://www.linkedin.com/in/muanra217/" target="_blank" rel="noopener"><i class="fab fa-linkedin"></i></a></p>
          </div>
          <div class="p-3 bg-success text-center skill-block">
              <p><a href="https://github.com/Muanra217" target="_blank" rel="noopener"><i class="fab fa-github"></i></a></p>
          </div>
          <div class="p-3 bg-warning text-center skill-block">
            <p><a href="https://www.instagram.com/muanra217/" target="_blank" rel="noopener"><i class="fab fa-instagram"></i></a></p>
          </div>
          <div class="p-3 bg-danger text-center skill-block skill-end">
            <p><a href="mailto:zirodf21@gmail.com"><i class="fas fa-envelope"></i></a></p>
          </div>
      </div>
  </div>
</div>
<div class="col-md-4 col-lg-4 img-dev"><img src="./dev2.jpg" alt="Muhamad Dian Rahendra"></div>
`;

export { createTemplateSearch, teamTemplate };
