const { login, logout, startLogout, starLoginEmailPassword } = require("../../Actions/authAction");
const { default: types } = require("../../Types/types");
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from "redux-thunk";

///////

const middlewares = [ thunk ]
const mockStore = configureStore( middlewares );

///////

const initState = {};

///////

let store = mockStore( initState );

///////

describe('Pruebas en archivo authActions', () => 
{

    beforeEach( () => 
    { 

        store = mockStore( initState );

    });

    ///////

    test('login y logout deben crear la accion respectiva ', () => 
    {
        const stateExpect = { type : types.login, payload : { uid : "Testing", displayName : "TestMan" } };

        const stateLogin = login( "Testing", "TestMan" );

        const stateLogout = logout();

        expect( stateLogin ).toEqual( stateExpect );

        expect( stateLogout ).toEqual( { type : types.logout } );

    });

    ///////

    test('debe realizar logout | starLogout', async () => {
       

         await store.dispatch( startLogout() );

         const actions = store.getActions();

         expect( actions[1] ).toEqual( { type : types.logout } );

         expect( actions[0] ).toEqual( { type : types.notesLogoutCleaning } );



    });

    //////

    test('Debe iniciar login con email y password | starLoginEmailPassword ', async() => 
    {
        
        await store.dispatch( starLoginEmailPassword( "test@testing.com", "123456" ) );

        const actions = store.getActions();

        expect( actions[1] ).toEqual( { type : types.login, payload : { uid : "LW6qRGuLKYX4pH4NnwEG9ZzuDVJ3", displayName : null } } );

    });
    
    
     
});
