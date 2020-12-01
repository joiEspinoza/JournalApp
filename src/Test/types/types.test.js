import types from "../../Types/types";


/////

describe('Pruebas en archivo types', () => 
{
    
    
    test('el objeto debe contener los parametros definidos por defecto', () => 
    {
        const typesDefinidos = 
        {
            
            login : "[Auth] Login",
            logout : "[Auth] Logout",

            //

            uiSetError : "[UI] Set Error",
            uiRemoveError : "[UI] Remove Error",
            uiStartLoading: "[UI] Start loading",
            uiFinishLoading: "[UI] Finish loading",

            //

            notesAddNew :  "[Notes] New notes",
            notesActive :  "[Notes] Set active note",
            notesLoad :    "[Notes] Load notes",
            notesUpdated : "[Notes] Update notes",
            notesFileUrl : "[Notes] Update image url",
            notesDelete : "[Notes] Delete note",
            notesLogoutCleaning : "[Notes] Logout cleaning"

        };
        
        expect( types ).toEqual( typesDefinidos );
    });

    
});
