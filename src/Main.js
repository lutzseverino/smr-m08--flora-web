import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Team from './pages/Team';

import Contribute from './pages/articles/Contribute';
import Privacy from './pages/articles/Privacy';
import Purchases from './pages/articles/Purchases';
import Cookies from './pages/articles/Cookies'

import { useTranslation } from 'react-i18next';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

const Main = () => {
  const { t } = useTranslation();
  return (
    <Router>
        <Routes> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/contribute' element={<Contribute article={t('articles.contribute')} />}></Route>
            <Route exact path='/privacy' element={<Privacy article={t('articles.privacy')} />}></Route>
            <Route exact path='/purchases' element={<Purchases article={t('articles.purchases')} />}></Route>
            <Route exact path='/cookies' element={<Cookies article={t('articles.cookies')}/>}></Route>
            <Route exact path='/team' element={<Team />}></Route>
        </Routes>
    </Router>
  );
}

export default Main;
