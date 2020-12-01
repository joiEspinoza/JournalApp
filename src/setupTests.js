import '@testing-library/jest-dom';
import { createSerializer } from 'enzyme-to-json';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Swal from "sweetAlert2";
 
////////////////

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

///////////////

const noScroll = () =>
{
    Object.defineProperty( window, "scrollTo", { value: noScroll, writable : true } );
};


/////////////////


jest.mock( 'sweetAlert2', () => ( { 
    
    fire : jest.fn(), 
    close : jest.fn(),

} ) );
