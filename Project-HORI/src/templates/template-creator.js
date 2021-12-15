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

export { createTemplateSearch };
