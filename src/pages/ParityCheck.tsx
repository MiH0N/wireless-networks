import { DataBits } from 'components/DataBit';
import { ConnectLoader } from 'components/ConnectLoader';

import { useParityCheck } from '@/utils/hooks/useParityCheck';
import { Button } from '@/components/Button';

import { BiRevision } from 'react-icons/bi';
import { ParityData } from '@/components/ParityData';

const initialData = {
  sender: '101011',
  reciver: '101011',
};

function ParityCheck() {
  const {
    senderData,
    paritySenderData,
    reciverData,
    parityReciverData,
    handleChangeSenderData,
    handleChangeReciverData,
    handleReset,
  } = useParityCheck(initialData);

  return (
    <div className='h-full p-8'>
      <h1>Parity Check</h1>
      <div className='space-x-8 my-4 flex justify-center items-end mt-8'>
        <ParityData
          mainData={senderData}
          parityData={paritySenderData}
          type='sender'
          handleChangeData={handleChangeSenderData}
        />
        <ConnectLoader count={10} className='mb-6 self-end' />
        <ParityData
          mainData={reciverData}
          parityData={parityReciverData}
          type='reciver'
          handleChangeData={handleChangeReciverData}
          showError={paritySenderData.data !== parityReciverData.data}
        />
      </div>
      <Button variant='error' iconComponent={<BiRevision />} onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
}

export default ParityCheck;
