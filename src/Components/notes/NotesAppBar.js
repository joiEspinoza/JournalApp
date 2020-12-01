import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveNote, startUploadingPicture } from '../../Actions/notesAction';

////

const NotesAppBar = () => 
{

    const dispatch = useDispatch();
    const { active:note } = useSelector( state => state.notes );

    ///////

    const handleSaveNote = () =>
    {
        dispatch( saveNote( note ) );
    };

    ///////

    const handleSavePicture = () =>
    {
        document.getElementById( "fileSelector" ).click();
    };

    ///////

    const handleFileChange = ( event ) =>
    {
        const file = event.target.files[0];

        file && dispatch( startUploadingPicture( file ) );

    };

    ///////

    return (

        <div className="notes__appbar">
            
            <span>25-11-2020</span>

            <input  id="fileSelector" name="file" type="file"  onChange={ handleFileChange } style={ { display : "none" } } />

            <div>

                <button className="btn"  onClick={ handleSavePicture }>picture</button>

                <button className="btn" onClick={ handleSaveNote } >save</button>

            </div>

        </div>
    );
};

////

export default NotesAppBar;
