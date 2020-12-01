const { setErrorAction, uiRemoveErrorAction, uiFinishLoading, uiStartLoadingAction } = require("../../Actions/uiActions");
const { default: types } = require("../../Types/types");

////

describe('Pruebas en archivo uiActions', () => 
{
    test('Todas las acciones deben funcionar', () => 
    {
        

        const actionSetError = setErrorAction("!!-> ERROR <-!!");

        const objeto1 = { type : types.uiSetError, payload :  "!!-> ERROR <-!!" };

        expect( actionSetError ).toEqual( objeto1 );

        ////

        const AuiRemoveError   = uiRemoveErrorAction();
        const AuiStartLoading  = uiStartLoadingAction();
        const AuiFinishLoading = uiFinishLoading();

        expect( AuiRemoveError ).toEqual( { type : types.uiRemoveError } );
        expect( AuiStartLoading ).toEqual( { type : types.uiStartLoading, payload : true } );
        expect( AuiFinishLoading ).toEqual( { type : types.uiFinishLoading, payload : false } );


    });
    
});
