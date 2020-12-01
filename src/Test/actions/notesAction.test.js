import { saveNote, starNewNote, startLoadingNotes, startUploadingPicture } from "../../Actions/notesAction";
import configureStore from 'redux-mock-store'; //ES6 modules
import thunk from "redux-thunk";
import { db } from '../../FireBase/fireBaseConfig';
import types from '../../Types/types';
import { HFileUpload } from "../../Helpers/HFileUpload";

///////

jest.mock( "../../Helpers/HFileUpload", ()=>({ 


  HFileUpload : jest.fn( ()=>{

    return Promise.resolve( "https://hola-mundo.com/cosa.png" );

  } )

}) );

///////

const middlewares = [ thunk ]
const mockStore = configureStore( middlewares );

///////

const initState = 
{ 
  auth : 
  { 
    uid : "Testing", 
    name : "testMan" 
  }, 
  notes: 
  {
      active: 
      {

        id: '0gHO9BeDUsL7ZFrNNGvu',
        title: 'Hola',
        body: 'Mundo'

      }
  }
};

///////

let store = mockStore( initState );

///////

describe('Pruebas en notesActions', () => 
{
   
    beforeEach( () => { 

      store = mockStore( initState );

    } );

    ///////

  
    test('debe crear una nueva nota | starNewNote ', async () => 
    {
        const objectActiveNote = 
        {
            type: types.notesActive,

            payload: 
            {
              id: expect.any( String ),
              title: '',
              body: '',
              date: expect.any( Number )
            }
        };

        const objectAddNewNote = 
        {
            type: types.notesAddNew,

            payload: 
            {
              id: expect.any( String ),
              title: '',
              body: '',
              date: expect.any( Number )
            }
        };

        await store.dispatch( starNewNote() );

        const action = store.getActions();

        expect( action[0] ).toEqual( objectActiveNote ); 

        expect( action[1] ).toEqual( objectAddNewNote ); 

        const docId = action[0].payload.id;

        await db.doc( `/Testing/journal/notes/${ docId }` ).delete();
        

    });

    /////

    test('saveNote debe actualizar la nota ', async () => {
      
      const note = { id : "1rrwiHD4blYVRUGWqJV1", title : "prueba", body : "body prueba" };

      await store.dispatch( saveNote( note ) );

      const action = store.getActions();

      expect( action[0].type ).toBe( types.notesUpdated );

      //const docRef = await db.doc( `/Testing/journal/notes/${ note.id }` ).get();

      //expect( docRef.data().title ).toBe( note.title );

    });

    //////

    test('starUploading debe actualizar url del entry', async () => {
      
  
          const file = new File( [], "foto.png" );

          await store.dispatch( startUploadingPicture( file ) );
    
          //const docRef = await db.doc( `/Testing/journal/notes/${ initState.notes.active.id }` ).get();
    
          //expect( docRef.data().url ).toBe( "https://hola-mundo.com/cosa.png" );

    });
    
    
    
});
