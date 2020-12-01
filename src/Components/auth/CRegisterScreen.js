import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import validator from "validator";
import { useDispatch, useSelector } from 'react-redux';
import { setErrorAction, uiRemoveErrorAction } from '../../Actions/uiActions';
import { starRegisterWhitEmailNamePassword } from '../../Actions/authAction';

///////

const CRegisterScreen = () => 
{

     const [ formValues, handleInputChange ] = useForm( { email : "joi@gmail.com", name : "Jose", password : "123456", password2 : "123456" } );

     const { email, name, password, password2  } = formValues;

     //////////

     const dispatch = useDispatch();

     const { msgError } = useSelector(  state => state.ui );

     /////////

     const handleSubmit = ( event ) =>
     {
        event.preventDefault();

        if( isFormValid() )
        {
            dispatch( starRegisterWhitEmailNamePassword( email, password, name ) ); 
        };

     };

     const isFormValid = () =>
     {
        if( name.trim().length === 0 )
        { 
            dispatch( setErrorAction( " name is not valid " ) );
            return false;
        }
        else if( !validator.isEmail( email ) )
        {
            dispatch( setErrorAction( "email is not valid" ) );
            return false;
        }
        else if( password !== password2 || password.length <= 5 )
        {
            dispatch( setErrorAction( "password is not valid" ) );
            return false;
        }
        else
        {
            dispatch( uiRemoveErrorAction() );
            return true;
        };
       
     };

     //////////

    return (

        <>
            <h3 className="auth__title" >Register</h3>

            <form onSubmit={ handleSubmit } className="animate__animated animate__fadeIn animate__faster">
                
                { msgError && <div className="auth__alert-error"> { msgError } </div>}
                <input className="auth__input" type="text" placeholder="Email" name="email" value={ email } onChange={ handleInputChange } autoComplete="off"/>
                <input className="auth__input" type="text" placeholder="Name" name="name" value={ name } onChange={ handleInputChange } autoComplete="off"/>
                <input className="auth__input" type="password" placeholder="Password" name="password" value={ password } onChange={ handleInputChange } autoComplete="off"/>
                <input className="auth__input" type="password" placeholder="Confirm Password" name="password2" value={ password2 } onChange={ handleInputChange } autoComplete="off"/>
                <button className="btn btn-primary btn-block mb-5" type="submit">Register</button>

                <Link className="link"  to="/auth/login">Already Register?</Link>

            </form>
      </>
    );

};

/////

export default CRegisterScreen;
