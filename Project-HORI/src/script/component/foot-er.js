class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `      
      <footer>
      <div class="d-flex flex-column justify-content-center align-items-center downfooter">
          <p class="text-md-left text-lg-right" id="downfooter">&nbsp;Made by &#128154; in Indonesia&nbsp;</p>
      </div>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/bootstrap/js/bootstrap.min.js"></script>
      </footer>
          `;
  }
}

customElements.define('foot-er', Footer);
