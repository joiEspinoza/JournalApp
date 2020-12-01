import React from 'react';
import { useSelector } from 'react-redux';
import JournalEntry from './JournalEntry';

/////

const JournalEntries = () => 
{

    const { note } = useSelector( state => state.notes );

    ////

    return (


        <div className="journal__entries">

            { note.map( ( element ) => <JournalEntry key={ element.id } { ...element } /> ) }
            
        </div>

    );
};

/////

export default JournalEntries;
