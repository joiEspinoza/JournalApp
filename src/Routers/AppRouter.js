import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import CJournalScreen from '../Components/journal/CJournalScreen';
import AuthRouter from "./AuthRouter";
import { firebase } from "../FireBase/fireBaseConfig";
import { useDispatch } from 'react-redux';
import { login } from '../Actions/authAction';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startLoadingNotes } from '../Actions/notesAction';

/////

const AppRouter = () => 
{

    const [ checking, setChecking ] = useState( true );

    const [ isLoggedIn, setIsLoggedIn ] = useState( false );

    ///////

    const dispatch = useDispatch();

    //////

    useEffect(() => 
    {
        firebase.auth().onAuthStateChanged( async ( user ) => {

            if( user?.uid )
            {
                dispatch(  login( user.uid, user.displayName ) );

                dispatch( startLoadingNotes( user.uid ) );  
                
                setIsLoggedIn( true );

            }
            else
            {
                setIsLoggedIn( false );
            };

            setChecking( false );

        } );

    }, [ dispatch, setChecking, setIsLoggedIn ]);


    ////////

    if( checking )
    {
        return ( <center><h1>||..... Wait ....||</h1></center> )
    };

    ////////

    return (


        <Router>

            <div>

                <Switch>

                    <PublicRoute isLoggedIn={ isLoggedIn } path="/auth" component={ AuthRouter } />  

                    <PrivateRoute isLoggedIn={ isLoggedIn } path="/" component={ CJournalScreen }  />

                    <Redirect to="/auth/login" />

                </Switch>

            </div>

        </Router>


    );
};

/////

export default AppRouter;
