class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `        
            <nav>
                <div>
                    <img class="logo" onclick="window.location.href='/index.html';" src="images/flora-logo.svg" alt="Flora">
                </div>
                <div>
                    <ul class="links">
                        <li><a href="/contribute.html">Contribute</a></li>
                        <li><a href="/support.html">Support</a></li>
                        <li><a href="/team.html">Our team</a></li>
                    </ul>
                </div>
                <div>
                    <button class="rounded accent-color button" onclick="window.location.href='https:\/\/discord.com\/';">Add to Discord</button>
                </div>
            </nav>`;
    }
}

customElements.define('block-navbar', NavBar);