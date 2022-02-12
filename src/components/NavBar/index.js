import Logo from "../../images/flora-logo.svg";

const Navbar = () => {
    return (
        <nav className="w-screen pt-4 pb-4 pl-64 pr-64
                        flex flex-row justify-between items-center">

            <div>
                <a href="index.html"><img className="cursor-pointer" src={Logo} alt="Flora logo"/></a>
            </div>

            <div className="list-none 
                            flex flex-row gap-8">
                <a href="contribute.html">Contribute</a>
                <a href="support.html">Support</a>
                <a href="team.html">Our team</a>
            </div>

            <div>
                <a href="https://discord.com"><button className="">Add to Discord</button></a>
            </div>
        </nav>
    );
};

export default Navbar;