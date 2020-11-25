import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Terapias from './pages/Terapias';


const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Terapias} path="/terapias/:id" />
        </BrowserRouter>
    )
}

export default Routes;
