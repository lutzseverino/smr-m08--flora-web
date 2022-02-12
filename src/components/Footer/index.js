const Footer = () => {
    return (
        <footer className="w-screen pt-14 pb-14 pl-64 pr-64
                           flex flex-row justify-between items-center
                           bg-black text-white">

            <div>
                <div>
                    <h3>Let your community grow, the <span className="opacity-70">b</span>right way</h3>
                </div>
            </div>

            <div className="flex flex-row">
                <div>
                    <div>
                        <h4>Product</h4>
                    </div>
                    <div>
                        <a href="index.html">Add to Discord</a>
                        <a href="index.html">Learn more</a>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Policies</h4>
                    </div>
                    <div>
                        <a href="index.html">Privacy</a>
                        <a href="index.html">Purchases</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;