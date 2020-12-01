const { default: authReducer } = require("../../Reducer/authReducer");
const { default: types } = require("../../Types/types");


describe('Pruebas en authReducer', () => 
{
    const state = {};

    ////

    test('pruebas caso login | debe retornar uid y displayName ', () => 
    {
        
        const action = { type : types.login, payload : { uid : "abcd123", displayName : "testMan" } };
        const user = authReducer(state, action );

        expect( user.name ).toBe( action.payload.displayName );
        expect( user.uid ).toBe( action.payload.uid );


    });

    //////

    test('pruebas caso logout | debe retornar objeto vacio ', () => 
    {
        
        const action = { type : types.logout };
        const user = authReducer( state, action );

        expect( user ).toEqual( {} );
    });

    /////

    test('pruebas caso Default | debe retornar objeto vacio ', () => 
    {
        
        const action = { type : types.notesActive };
        const user = authReducer( state, action );

        expect( user ).toEqual( {} );

    });

    
});
