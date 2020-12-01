const { HFileUpload } = require("../../Helpers/HFileUpload");
import cloudinary from "cloudinary";

/////

cloudinary.config(
{ 
    cloud_name: 'djlmqpd2n', 
    api_key: '954643569694854', 
    api_secret: 'vZW8ucdFDPB4GRrA_ouBM4L91oY' 

});

//////

describe('Pruebas en archivo HFileUpload.js', () => 
{
    test('Debe cargar un archivo y cargar un url ', async (  ) => 
    {
        
        const img =  await fetch( "https://yosoy.dev/wp-content/uploads/2012/08/hqdefault.jpg" );
        const blob = await img.blob();
        
        
        const file = new File( [ blob ], "foto.png" );
        const url = await HFileUpload( file );

        expect( typeof url ).toBe( "string" );

        //Borrar imagen por id
        const segment = url.split( "/" );
        const imageId = segment[ segment.length - 1 ].replace( ".jpg","" );
        console.log( imageId );

        //cloudinary.v2.api.delete_resources( imageId, {}, () => { done(); } );

        cloudinary.v2.api.delete_resources( imageId, {}, ()=> {});

    });

    ///////

    test('Debe retornar un error si no se le manda un imagen ', async () => 
    {
    
        const file = new File( [], "foto.png" );
        const url = await HFileUpload( file );

        expect( url ).toBe( null );

    });
     
});
