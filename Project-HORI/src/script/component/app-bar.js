class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `    
    <nav class="navbar navbar-light navbar-expand-md">
        <div class="container-fluid">
            <div><a class="navbar-brand navbar-brand-centered" href="#"><h1>HORI</h1></a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">Lorem </a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Ipsum </a></li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Dolor </a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Lorem </a></li>
                </ul>
            </div>
        </div>
    </nav>
          `;
  }
}

customElements.define('app-bar', AppBar);
