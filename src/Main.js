import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contribute from './pages/Contribute';
import Privacy from './pages/Privacy';

const Main = () => {
  return (
    <Router>
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/contribute' element={<Contribute />}></Route>
            <Route exact path='/privacy' element={<Privacy />}></Route>
        </Routes>
    </Router>
  );
}

export default Main;
