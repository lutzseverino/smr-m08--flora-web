const Footer = () => {
    return (
        <footer className="w-screen pt-14 pb-14 pl-9 pr-9 
                           flex flex-row justify-between items-center
                           dark:bg-gray-900 dark:text-white">

            <div className="hidden md:inline-block">
                <div>
                    <h3>Let your community grow, the <span className="opacity-50">b</span>right way</h3>
                </div>
            </div>

            <div className="flex flex-row gap-8 ml-auto
                            text-right">
                <div>
                    <div>
                        <h4>Product</h4>
                    </div>
                    <div className="flex flex-col">
                        <ul className="list-">
                            <li><a href="index.html">Add to Discord</a></li>
                            <li><a href="index.html">Learn more</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Policies</h4>
                    </div>
                    <div className="flex flex-col">
                        <ul>
                            <li><a href="index.html">Privacy</a></li>
                            <li><a href="index.html">Purchases</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;