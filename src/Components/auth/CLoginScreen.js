import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { starLoginEmailPassword, startGoogleLogin } from '../../Actions/authAction';
import validator from 'validator';
import Swal from 'sweetalert2';

///

const CLoginScreen = () => 
{

    const [ formValues, handleInputChange ] = useForm(  { email : "joi@gmail.com", password : "123456" } );

    const { email, password } = formValues;

    /////////

    const dispatch = useDispatch();

    const { msgError, loading } = useSelector( state => state.ui );

    /////////

    const handleLogin = ( event ) =>
    {
        event.preventDefault();

        if( formValidator() )
        {
            dispatch( starLoginEmailPassword( email, password ) );
        }
       
    }

    const formValidator = () =>
    {
        if( !validator.isEmail( email ) )
        {
            Swal.fire( "error", "email not valid", "error" );
            return false;
        }
        else if( password.length <= 5 )
        {
            Swal.fire( "error", "invalid password", "error" );
            return false;
        };

        return true;
    };

    /////////

    const handleGoogleLogin = () =>
    {

        dispatch( startGoogleLogin() );
    }

    /////////

    return (

        <>
          <h3 className="auth__title" >Login</h3>

          <form onSubmit={ handleLogin } className="animate__animated animate__fadeIn animate__faster">

              { msgError && Swal.fire( "error", msgError, "error" )  }
              <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value={ email } onChange={ handleInputChange }/>
              <input className="auth__input" type="password" placeholder="Password" name="password" autoComplete="off" value={ password } onChange={ handleInputChange }/>
              <button className="btn btn-primary btn-block" type="submit" disabled={ loading ? true : false }>Login</button>

              <div className="auth__social-network">

                  <p>Login with social network</p>

                    <div className="google-btn" onClick={ handleGoogleLogin }>

                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>

                        <p className="btn-text">Sign in with google</p>

                    </div>

              </div>

              <Link className="link"  to="/auth/register">Create new account</Link>

          </form>
        </>
    );

};

/////

export default CLoginScreen;
