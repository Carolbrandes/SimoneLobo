import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Terapias from './pages/Terapias';
import Formacao from './pages/Formacao';
import Blog from './pages/Blog';
import Contato from './pages/Contato';


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Terapias} path="/terapias/:id" />
            <Route component={Formacao} path="/formacao" />
            <Route component={Blog} path="/blog" />
            <Route component={Contato} path="/contato" />
        </BrowserRouter>
    )
}

export default Routes;
