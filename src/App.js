import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./Main";

function App() {
    return ( 
        <div>
            <header>
                <NavBar></NavBar>
                    <Main />
                <Footer></Footer>
            </header>
        </div>
    );
}

export default App;