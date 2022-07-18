import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ModBook from '../pages/modifiedBook';
import Principal from '../pages/principal';
import WelcomePage from '../pages/welcomePage';
import NewBook from '../pages/newBook';
import DetailBook from '../pages/detailBook';

function Router (){
return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<WelcomePage/>} />
            <Route path='/principal' element={<Principal/>} />
            <Route path='/modifiedBook' element={<ModBook/>} />
            <Route path='/newBook' element={<NewBook/>} />
            <Route path='/detailBook' element={<DetailBook/>}/>
        </Routes>
    </BrowserRouter>
    )
}
export default Router;