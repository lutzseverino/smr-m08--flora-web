const Footer = () => {
    return (
        <footer className="pt-14 pb-14 pl-9 pr-9 
                           flex flex-col justify-between items-center
                           bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">

            <div className="flex flex-row">
                <div className="hidden md:inline-block">
                    <div>
                        <h3>Let your community grow, the bright way</h3>
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
                                <li><a href="https://discord.com">Add to Discord</a></li>
                                <li><a href="/#features">Learn more</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>Policies</h4>
                        </div>
                        <div className="flex flex-col">
                            <ul>
                                <li><a href="/privacy">Privacy</a></li>
                                <li><a href="/purchases">Purchases</a></li>
                                <li><a href="/cookies">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <p>
                    <a href="https://getflora.cat">Flora Landing</a> © 2022 by <a href="https://github.com/frequential">Jasper Lutz Severino</a> is licensed under CC <a href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1">BY-SA 4.0</a> 
                </p>
            </div>
        </footer>
    );
};

export default Footer;