import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from "redux-thunk";
import CRegisterScreen from '../../../Components/auth/CRegisterScreen';

//////

const middlewares = [ thunk ]
const mockStore = configureStore( middlewares );

///////

const initState = { auth : {}, ui: { loading : false, msgError : null }, notes : { note : [], active : null } };

///////

let store = mockStore( initState );

///////

const wrapper = mount(

    <Provider store={ store }>

        <MemoryRouter>

            <CRegisterScreen/>

        </MemoryRouter>

    </Provider>

);

//////////

describe('Pruebas en CRegisterScreen.js', () => 
{

    test('Debe mostrarse correctamente ', () => 
    {
        
        expect( wrapper ).toMatchSnapshot();

    });

    /////

    test('debe hacer el dispatch de la accion respectiva', () => {
       
        const emailField = wrapper.find( 'input[name="email"]' );

        emailField.simulate( "change", { target : { value : "", name : "email" } } );

        wrapper.find( "form" ).simulate( "submit", { preventDefault(){} } );

        const actions = store.getActions();

        expect( actions[0] ).toEqual( { type: '[UI] Set Error', payload: 'email is not valid' } );

    });


    //////


    test('Debe mostrar la caja de alerta con erro', () => 
    {

        const initState = { auth : {}, ui: { loading : false, msgError : "el email no es correcto" }, notes : { note : [], active : null } };

        ///////

        let store = mockStore( initState );

        ///////

        const wrapper = mount(

            <Provider store={ store }>

                <MemoryRouter>

                    <CRegisterScreen/>

                </MemoryRouter>

            </Provider>

        );

        //////////

        expect( wrapper.find( ".auth__alert-error" ).exists() ).toBe( true );

        expect( wrapper.find( ".auth__alert-error" ).text().trim() ).toBe( "el email no es correcto" );

    });
    

});
