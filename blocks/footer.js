class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `        
            <footer class="flex-row" section="small">
                <div class="flex-column footer-title">
                    <div class="slogan">
                        <h3>Let your community grow, the <span>b</span>right way</h3>
                    </div>
                </div>

            <div class="flex-row footer-navigation">
                <div class="flex-column">
                    <div>
                        <h4>Product</h4>
                    </div>
                        <ul>
                            <li><a href="https://discord.com">Add to Discord</a></li>
                            <li><a href="#">Learn more</a></li>
                        </ul>
                </div>

                <div class="flex-column">
                    <div>
                        <h4>Policies</h4>
                    </div>
                        <ul>
                            <li><a href="policies/privacy.html">Privacy</a></li>
                            <li><a href="policies/purchases.html">Purchases</a></li>
                        </ul>
                    </div>
                </div>
            </footer>`;
    }
}

customElements.define('block-footer', Footer);