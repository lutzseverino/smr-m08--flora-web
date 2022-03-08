import React, { Suspense } from 'react';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Main from "./Main";

export default function App() {
    return ( 
        <Suspense fallback="loading">
            <div>
                <header>
                    <NavBar></NavBar>
                        <Main />
                    <Footer></Footer>
                </header>
            </div>
        </Suspense>
    );
}