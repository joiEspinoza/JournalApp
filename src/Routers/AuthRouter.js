import React from 'react';
import { BrowserRouter as Switch, Redirect, Route } from "react-router-dom";
import CLoginScreen from '../Components/auth/CLoginScreen';
import CRegisterScreen from '../Components/auth/CRegisterScreen';


/////

const AuthRouter = () => 
{

    return (

        <div className="auth__main">

            <div className="auth__box-container">

                <Switch>

                    <Route exact path="/auth/login" component={ CLoginScreen }/>

                    <Route exact path="/auth/register" component={ CRegisterScreen } />

                    <Redirect to="/auth/login" />

                </Switch>

            </div>

        </div>

    );
};

/////

export default AuthRouter;
