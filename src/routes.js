import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './Page/Home';
//import Vitrini from './Page/Vitrini';
import Vitrine from '../src/Page/Vitrine';
export default function Routes () {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Vitrine' component={Vitrine} />
            </Switch>
        </BrowserRouter>
    );
}