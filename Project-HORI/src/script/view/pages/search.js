const searchPage = {
    async render() {
      return `
      <div>
        <h2 class="title" tabindex="0">Search Hospital Room</h2>  
      </div>
      <div class="container">
      <div class="row">
        <div class="col">
          <div class="form-check form-check-inline border rounded p-2">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
            <label class="form-check-label" for="inlineRadio1">RS Bed Covid-19</label>
          </div>
        </div>
        <div class="col">
          <div class="form-check form-check-inline border rounded p-2 mr-md-3">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
            <label class="form-check-label" for="inlineRadio2">RS Bed Non Covid-19</label>
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
      <button type="button" class="btn btn-secondary btn-lg btn-search my-btn">Search</button>
    </div>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
  };
   
  export default searchPage;