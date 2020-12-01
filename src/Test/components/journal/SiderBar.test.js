const { mount } = require("enzyme");
const { Provider } = require("react-redux");
const { default: SiderBar } = require("../../../Components/journal/SiderBar");
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from "redux-thunk";
import { startLogout } from '../../../Actions/authAction';
import { starNewNote } from '../../../Actions/notesAction';

///////

jest.mock( '../../../Actions/authAction', () => ( { 
    
    startLogout : jest.fn(), 

} ) );

jest.mock( '../../../Actions/notesAction', () => ( { 
    
    starNewNote : jest.fn(), 

} ) );

///////

const middlewares = [ thunk ]
const mockStore = configureStore( middlewares );

////////

const initState = 
{ 
    auth : { uid : "ABCD1234", name : "TestMan" }, 
    ui: { loading : false, msgError : null }, 
    notes : { note : [], active : null } 
};

let store = mockStore( initState );
store.dispatch = jest.fn();

////////

describe('Pruebas en SiderBar.js', () => 
{

    const wrapper = mount( 
    
        <Provider store={ store } >
            <SiderBar/> 
        </Provider>
    
    );

    ///////

    test('Debe mostrarse correctamente ', () => 
    {
        expect( wrapper ).toMatchSnapshot();
    });
    
    //////

    test('debe llamar logout', () => 
    {
        wrapper.find( ".btn" ).prop( "onClick" )()

        expect( startLogout ).toHaveBeenCalled();

    });
    
    //////

    test('debe llamar starNewNote ', () => 
    {
        wrapper.find( ".fa-calendar-plus" ).prop( "onClick" )();

        expect( starNewNote  ).toHaveBeenCalled();
        
    });
    
        
});
