import React from 'react';
import { useSelector } from 'react-redux';
import CNoteScreen from '../notes/CNoteScreen';
import NothingSelected from './NothingSelected';
import SiderBar from './SiderBar';

///

const CJournalScreen = () => 
{ 

    const { active } = useSelector( state => state.notes );

    return (

        <div className="journal__box-container">

            <SiderBar/>

            <main>

                { active ? <CNoteScreen /> : <NothingSelected/> }

            </main>

        </div>
    );

};

/////

export default CJournalScreen;
