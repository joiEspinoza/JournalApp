import React from 'react';
import { act } from "@testing-library/react";
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
const { mount } = require("enzyme");
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from "redux-thunk";
import { login } from '../../Actions/authAction';
import AppRouter from '../../Routers/AppRouter';
import { firebase } from "../../FireBase/fireBaseConfig";

/////////

jest.mock( '../../Actions/authAction', () => ( { 
    
    login : jest.fn(), 

} ) );


////////

const middlewares = [ thunk ]
const mockStore = configureStore( middlewares );

///////

const initState = { auth : {}, ui: { loading : false, msgError : null }, notes : { active :  { id : "ABC" }, note : [] } };

///////

let store = mockStore( initState );
store.dispatch = jest.fn(); // con esto se simula la realizacion de los dispatch

///////

describe('Pruebas en AppRouter.js', () => 
{
   
    test('Debe llamaro login si estoy auntenticado ', async () => 
    {

        let user;

        await act( async ()=>{

            const userCredential = await firebase.auth().signInWithEmailAndPassword( "test@testing.com", "123456" );

            user = userCredential.user;

            const wrapper = mount( 
   
                <Provider store={ store }>
            
                    <MemoryRouter>
            
                        <AppRouter/> 
            
                    </MemoryRouter>
            
                </Provider>
               
               );
    
        });

        expect( login ).toHaveBeenCalledWith( "LW6qRGuLKYX4pH4NnwEG9ZzuDVJ3", null );
        
    });
    
});
