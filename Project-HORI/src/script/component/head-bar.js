class HeadBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="jumbotron bg-white">        
          <div class="container">
            <h1 class="display-4 font-weight-bold">Hospital Room Information</h1>
            <p class="lead">Mencari ketersediaan kamar rumah sakit yang tersedia di indonesia</p>                        
          </div>
        </div>
        `;
  }
}

customElements.define('head-bar', HeadBar);
