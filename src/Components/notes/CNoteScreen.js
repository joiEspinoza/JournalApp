import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleteNote } from '../../Actions/notesAction';
import useForm from '../../Hooks/useForm';
import NotesAppBar from './NotesAppBar';


////

const CNoteScreen = () => 
{

    const dispatch = useDispatch();

    /////

    const { active:noteActive } = useSelector( state => state.notes );

    const [ formValues, handleInputChange, reset ] = useForm( noteActive );

    const { title, body, id } = formValues;

    /////

    const activeId = useRef( noteActive.id );

    useEffect( () =>  //ayuda a resetear los valores de la nota segun el id | se dispara solo si el ID cambia
    {
        if( noteActive.id !== activeId.current)
        {
            reset( noteActive );
            activeId.current = noteActive.id;
        };

    }, [ noteActive, reset ] );

    ///// 

    useEffect( () => 
    {
       
        dispatch( activeNote( formValues.id, { ...formValues } ) );

    }, [ formValues, dispatch ] );

    //////
    
    const handleDelete = () =>
    {
        dispatch( startDeleteNote( id ) );
    };

    /////


    return (

        <div className="notes__main-content">

            <NotesAppBar/>

            <div className="notes__content">

                <input type="text" placeholder="Some awesone title" autoComplete="off" className="notes__title-input" name="title" value={ title } onChange={ handleInputChange }/>

                <textarea placeholder="What happen today?" className="notes__textarea" name="body" value={ body } onChange={ handleInputChange } ></textarea>
                
                { (noteActive.url) && 
                
                    (<div className="notes__image">

                            <img 
                                src={ noteActive.url }
                                alt="img"
                            />

                    </div>)
                }

            </div>

            <button className="btn btn-danger" onClick={ handleDelete }> Delete </button>
            
        </div>

    );

};

/////

export default CNoteScreen;
