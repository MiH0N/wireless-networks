import { DataBits } from 'components/DataBit';
import { ConnectLoader } from './components/ConnectLoader';

function App() {
  return (
    <>
      <div className='space-y-4 my-4'>
        <DataBits data='10101' />
        <DataBits data='1010111' disabled />
        <ConnectLoader />
      </div>
    </>
  );
}

export default App;
