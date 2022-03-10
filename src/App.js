import React, { Suspense } from 'react';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./Main";
import Cookies from './components/Cookies';

export default function App() {
    return ( 
        <Suspense fallback="Loading...">
            <div>
                <header>
                    <NavBar></NavBar>
                        <Main />
                    <Cookies></Cookies>
                    <Footer></Footer>
                </header>
            </div>
        </Suspense>
    );
}