import types from "../Types/types";
import { firebase, googleAuthProvider } from "../FireBase/fireBaseConfig";
import { uiStartLoadingAction, uiFinishLoading } from "./uiActions";
import Swal from 'sweetalert2';
import { purgeLogout } from "./notesAction";

////

const login = ( uid, displayName ) => ( { type : types.login, payload : { uid, displayName } } );

///// LOGIN NORMAL

const starLoginEmailPassword = ( email, password ) =>
{
    return ( dispatch ) => 
    {
        dispatch( uiStartLoadingAction() );

        return firebase.auth().signInWithEmailAndPassword( email, password )
        .then( ( { user } ) => 
        { 
            dispatch( login( user.uid, user.displayName ) );

            dispatch( uiFinishLoading() );

        } )
        .catch( ( error ) => 
        { 
            console.log( error );
            
            dispatch( uiFinishLoading() );

            Swal.fire( "error", error.message, "error" );
            
        } );
    };
};

///// CREAR USUARIO

const starRegisterWhitEmailNamePassword = ( email, password, name ) =>
{
    return( ( dispatch ) => 
    {

        firebase.auth().createUserWithEmailAndPassword( email, password )
        .then( async ( { user } ) =>
        {  
            await user.updateProfile( { displayName : name } ); 
            dispatch( login( user.uid, user.displayName ) );

        } )
        .catch( ( error ) => {
            
            console.log( error );

            Swal.fire( "error", error.message, "error" );
        
        } );

    });
};

///// LOGIN GOOGLE

const startGoogleLogin = () =>
{
    return ( dispatch ) => 
    {
        firebase.auth().signInWithPopup( googleAuthProvider )
        .then( ( { user } ) => dispatch( login( user.uid, user.displayName ) ) )
        .catch( ( error ) => console.log( error ) );
    };
};

/////////////////////////////////////////////----LOGOUT----///////////////////////////////////////

const startLogout = () =>
{
    return async ( dispatch ) => 
    {
        try 
        {
            await firebase.auth().signOut();

            dispatch( purgeLogout() );
            dispatch( logout() );

        } 
        catch( error ) 
        {
            console.log( error );
        };
       
    };
};

const logout = () => ( { type : types.logout } );

//////

export 
{ 
    login, 
    starLoginEmailPassword, 
    startGoogleLogin, 
    starRegisterWhitEmailNamePassword,
    startLogout,
    logout 
};