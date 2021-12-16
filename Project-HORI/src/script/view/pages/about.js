const aboutPage = {
  async render() {
    return `
      <div class="container">
        <h2 class="title" tabindex="0">Developer Team</h2>
        <div class="container mt-5 mb-5">
          <div class="row no-gutters">
              <div class="col-md-4 col-lg-4"><img src="https://i.imgur.com/aCwpF7V.jpg"></div>
                <div class="col-md-8 col-lg-8">
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-row justify-content-between align-items-center p-5 bg-dark text-white">
                            <h2 class="display-5 my-name">Fachrul Rozi</h2>
                        </div>
                        <div class="p-3 bg-black text-white">
                            <h6>Web designer &amp; Developer</h6>
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
                      <div class="p-3 bg-danger text-center skill-block">
                        <p><a href="mailto:zirodf21@gmail.com"><i class="fas fa-envelope"></i></a></p>
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
                      <div class="p-3 bg-danger text-center skill-block">
                        <p><a href="mailto:zirodf21@gmail.com"><i class="fas fa-envelope"></i></a></p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="col-md-4 col-lg-4"><img src="./dev2.jpg"></div>
        </div>
    </div>
      `;
  },

  async afterRender() {
    
  },
};

export default aboutPage;
