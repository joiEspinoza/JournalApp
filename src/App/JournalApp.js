import React from 'react';
import AppRouter from '../Routers/AppRouter';
import { Provider } from "react-redux";
import store from '../Store/store';

////

const JournalApp = () => 
{

    return (

        <Provider store={ store }>

            <AppRouter />

       </Provider>
        
    );

};

/////

export default JournalApp;
