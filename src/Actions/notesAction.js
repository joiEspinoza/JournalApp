import { db } from "../FireBase/fireBaseConfig";
import { HloadNotes } from "../Helpers/HloadNotes";
import types from "../Types/types";
import Swal from "sweetalert2";
import { HFileUpload } from "../Helpers/HFileUpload";

/////

const starNewNote = () =>
{
    return async ( dispatch, getState ) => {

        try 
        {
            const { uid } = getState().auth;

            const newNote = 
            {
                title : "",
                body : "",
                date : new Date().getTime()
            };
    
            const docRef = await db.collection( `${ uid }/journal/notes` ).add( newNote );
    
            dispatch( activeNote( docRef.id, newNote ) );
            
            dispatch( addNewNote( docRef.id, newNote ) );
        } 
        catch (error) 
        {
            console.log(error);
        }
      

    };
};

/////

const activeNote = ( id, note ) =>( { type : types.notesActive, payload : { id, ...note } } );

///////

const addNewNote = ( id, note ) => ( { type : types.notesAddNew, payload : { id, ...note } } );

//////

const startLoadingNotes = ( uid ) =>
{
    return async ( dispatch ) => 
    {
        try 
        {
            const notes = await HloadNotes( uid );

            dispatch( setNotes( notes ) );
        } 
        catch (error) 
        {
            console.log( error );
        }
     
    };
};

///////

const setNotes = ( notes ) => ( { type : types.notesLoad, payload : notes } );

//////

const saveNote = ( note ) =>
{
    return async ( dispatch, getState ) =>
    {
        try 
        {
            const { uid } = getState().auth;

            if( !note.url )
            {
                delete note.url;
            };
    
            const noteToFireStore = { ...note };
            delete noteToFireStore.id; // elimina una propiedad del objeto
    
            await db.doc( `${ uid }/journal/notes/${ note.id }` ).update( noteToFireStore );
    
            dispatch( refreshNote( note.id, noteToFireStore ) );
    
            Swal.fire("Saved",note.title,"success");

        } 
        catch ( error ) 
        {
            Swal.fire("Error",error,"error");
        }
      
    };
};

//////

const refreshNote = ( id, note ) => ( { type : types.notesUpdated, payload : { id, note : { id, ...note } } } );

///////

const startUploadingPicture = ( file ) =>
{
    return async ( dispatch, getState ) =>
    {

        try 
        {
            const { active:activeNote } = getState().notes;

            Swal.fire(
    
                {
                    title: "Uploading....",
                    text: "Please wait...",
                    showConfirmButton: false,
                    onBeforeOpen: ()=>{
                        
                        Swal.showLoading();
                    }
                }
    
            );
    
            const fileUrl = await HFileUpload( file );
            activeNote.url = fileUrl;
            
            dispatch( saveNote( activeNote ) );
    
            Swal.close();
        } 
        catch (error) 
        {
            console.log( error );
        }
       
    };
};

//////

const startDeleteNote = ( id ) =>
{
    return async ( dispatch, getState ) =>
    {
        try 
        {
            const uid = getState().auth.uid;

            await db.doc( `${ uid }/journal/notes/${ id }` ).delete();
    
            dispatch( deleteNote( id ) );
        } 
        catch (error) 
        {
            console.log( error );
        }
       
    };
};

/////

const deleteNote = ( id ) => ( { type : types.notesDelete, payload : id } );

/////

const purgeLogout = () => ( { type : types.notesLogoutCleaning } );


/////

export 
{ 
    starNewNote, 
    activeNote, 
    setNotes, 
    startLoadingNotes, 
    saveNote, 
    refreshNote, 
    startUploadingPicture,
    startDeleteNote,
    purgeLogout
};

