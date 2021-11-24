class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `    
    <nav class="navbar navbar-light navbar-expand-md">
        <div class="container-fluid">
            <div><div class="navbar-brand navbar-brand-centered logo-link" href="#"><img src="./logo.png" class="logo"></div><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button></div>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link" href="#">Home </a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About </a></li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Developers </a></li>
                    <li class="nav-item"><a class="nav-link" href="#">API </a></li>
                </ul>
            </div>
        </div>
    </nav>
          `;
  }
}

customElements.define('app-bar', AppBar);
