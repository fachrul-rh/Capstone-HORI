const selectLoading = (selectElement) => {
  selectElement.parentElement.classList.add('select-wrapper');
  selectElement.classList.replace('form-select', 'loading-form-select');
  selectElement.disabled = true;
};

const hideSelectLoading = (select) => {
  select.parentElement.classList.remove('select-wrapper');
  select.classList.replace('loading-form-select', 'form-select');
  select.disabled = false;
};

const pageLoading = () => {
  const loader = document.querySelector('.loading');
  loader.classList.remove('d-none');
};

const hidePageLoading = () => {
  const loader = document.querySelector('.loading');
  const cardRs = document.querySelector('.cardRs');
  loader.classList.add('d-none');
  cardRs.style.opacity = '0';
  setTimeout(() => (cardRs.style.opacity = '1'), 100);
};

const modalLoading = () => {
  const sectionDetail = document.querySelector('.cardRs');
  const loader = `<div class="loader" role="status">
                    <span class="visually-hidden"></span>
                  </div>
                  <div class="modal-body">
                    <div class="container mt-5">
                      <div class="row justify-content-center">
                        <div class="col-lg-10 col-12">
                          <h5 class="display-5 fw-bold">Detail Rumah Sakit</h5>
                        </div>
                      </div>
                    </div>
                  </div>`;

  sectionDetail.innerHTML = loader;
};

const modalButtonLoading = () => {
  const sectionDetail = document.querySelector('.cardRs');
  const loader = `<div class="loader" role="status">
                    <span class="visually-hidden"></span>
                  </div>
                  <div class="modal-body">
                    <div class="container mt-5">
                      <div class="row justify-content-center">
                        <div class="col-lg-10 col-12">
                          <h5 class="display-5 fw-bold">Daftar Rumah Sakit</h5>
                        </div>
                      </div>
                    </div>
                  </div>`;

  sectionDetail.innerHTML = loader;
};

export { selectLoading, hideSelectLoading, pageLoading, hidePageLoading, modalLoading, modalButtonLoading };
