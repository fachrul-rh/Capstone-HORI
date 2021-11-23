class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `      
      <footer>
      <div class="d-flex flex-column justify-content-center align-items-center downfooter">
          <p class="text-md-left text-lg-right">All data made available by <span><a href="https://github.com/satyawikananda/rs-bed-covid-indo-api/" target="_blank">RS Bed COVID API</a></span></p>
          <p class="text-md-left text-lg-right" id="downfooter">&nbsp;Made by ❤️&nbsp; in Indonesia&nbsp;</p>
      </div>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </footer>
          `;
  }
}

customElements.define('foot-er', Footer);
