import { db } from "../FireBase/fireBaseConfig";

////

const HloadNotes = async ( uid ) =>
{
    try 
    {
        const noteSnap =  await db.collection( `${ uid }/journal/notes` ).get();

        const notes = [];
    
        noteSnap.forEach( ( snap ) => 
        {  
    
            notes.push(
    
                { id : snap.id, ...snap.data() }
            );
    
        } );
    
        return notes;
        
    } 
    catch (error) 
    {
        console.log( error );
    };
   
};

/////

export { HloadNotes };

//////// Carga todos los datos relacionados con las notas desde firebase