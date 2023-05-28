import { DataBits } from 'components/DataBit';
import { ConnectLoader } from 'components/ConnectLoader';
import { useDataBit } from 'utils/hooks/useDataBit';

function App() {
  const senderData = useDataBit('10101');
  const reciverData = useDataBit('1010111');
  return (
    <>
      <div className='space-x-8 my-4 flex justify-center items-center mt-8'>
        <DataBits data={senderData.data} onChangeBit={senderData.handleChangeBit} />
        <ConnectLoader count={10} />
        <DataBits data={reciverData.data} onChangeBit={reciverData.handleChangeBit} disabled />
      </div>
    </>
  );
}

export default App;
