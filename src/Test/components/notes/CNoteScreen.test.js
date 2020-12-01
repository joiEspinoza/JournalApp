const { mount } = require("enzyme");
const { Provider } = require("react-redux");
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from "redux-thunk";
import { activeNote } from '../../../Actions/notesAction';
import CNoteScreen from '../../../Components/notes/CNoteScreen';

///////

jest.mock( '../../../Actions/notesAction', () => ( { 
    
    activeNote : jest.fn(), 

} ) );

///////

const middlewares = [ thunk ]
const mockStore = configureStore( middlewares );

////////

const initState = 
{ 
    auth : { uid : "ABCD1234", name : "TestMan" }, 
    ui: { loading : false, msgError : null }, 
    notes : { note : [], active : { id:"ABC123", title : "", body : "esto es body", date : 0 } } 
};

let store = mockStore( initState );
store.dispatch = jest.fn();

////////

    const wrapper = mount( 
    
        <Provider store={ store } >
            <CNoteScreen/> 
        </Provider>
    
    );

    ///////

describe('Pruebas en CNoteScreen.js', () => 
{
   test('Debe mostrarse correctamente ', () => 
   {
       
        expect( wrapper ).toMatchSnapshot();


   });

   //////

   test('Debe disparar el activeNote ', () => 
   {
      
        wrapper.find( 'input[name="title"]' ).simulate( "change", { target : { value : "Test Title", name : "title" } } );

      
        expect( activeNote ).toHaveBeenCalledWith( "ABC123", { id : "ABC123", title : "Test Title", body : "esto es body", date : 0 } );

   });
   
    
});
