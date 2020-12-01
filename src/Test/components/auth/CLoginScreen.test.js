import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
const { mount } = require("enzyme");
const { default: CLoginScreen } = require("../../../Components/auth/CLoginScreen");
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from "redux-thunk";
import { starLoginEmailPassword, startGoogleLogin } from '../../../Actions/authAction';


////////

jest.mock( '../../../Actions/authAction', () => ( { 
    
    startGoogleLogin : jest.fn(), 

    starLoginEmailPassword : jest.fn()

} ) );

///////

const middlewares = [ thunk ]
const mockStore = configureStore( middlewares );

///////

const initState = { auth : {}, ui: { loading : false, msgError : null } };

///////

let store = mockStore( initState );
store.dispatch = jest.fn();

///////

const wrapper = mount( 
   
    <Provider store={ store }>

        <MemoryRouter>

            <CLoginScreen/> 

        </MemoryRouter>

    </Provider>
   
   );

////////

describe('pruebas en componente CLoginScreen.js', () => 
{

    beforeEach( () => 
    { 

        store = mockStore( initState );
        jest.clearAllMocks();

    });

    ///////


    test('Debe mostrarse correctamente', () => 
    {
        

        expect( wrapper ).toMatchSnapshot();


    });

    ////////

    test('Debe disparar startGoogleLogin', () => 
    {
       
        
        wrapper.find( ".google-btn" ).prop( "onClick" )();

        expect( startGoogleLogin ).toBeCalledTimes( 1 );

    });

    //////

    test('debe disparar starlogin con los respectivos argumentos ', () => 
    {
        
        wrapper.find( "form" ).prop( "onSubmit" )( { preventDefault(){} } );

        expect( starLoginEmailPassword ).toHaveBeenCalledWith( "joi@gmail.com", "123456" );

    });
    
});
