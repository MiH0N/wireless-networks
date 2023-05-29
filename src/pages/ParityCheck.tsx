import { ConnectLoader } from 'components/ConnectLoader';

import { useParityCheck } from '@/utils/hooks/useParityCheck';
import { Button } from '@/components/Button';

import { BiRevision } from 'react-icons/bi';
import { ParityData } from '@/components/ParityData';
import { MyLottie } from '@/components/Lottie/MyLottie';
import serverLottie from '@/constants/lotties/server.json';
import radarLottie from '@/constants/lotties/Radar.json';

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
      <div className='space-x-8 my-4 flex justify-between items-center mt-8'>
        <ParityData
          mainData={senderData}
          parityData={paritySenderData}
          type='sender'
          handleChangeData={handleChangeSenderData}
        />
        <ParityData
          mainData={reciverData}
          parityData={parityReciverData}
          type='reciver'
          handleChangeData={handleChangeReciverData}
          showError={paritySenderData.data !== parityReciverData.data}
        />
      </div>
      <div className='space-x-8 my-4 flex justify-around items-center mt-8'>
        <MyLottie width={200} animationData={radarLottie} className='rotateY-180 min-h-[12rem]' />
        <ConnectLoader count={15} className='mb-6' isStatic/>
        <MyLottie
          width={160}
          animationData={serverLottie}
          className='min-h-[12rem] flex items-center'
        />
      </div>

      <Button variant='error' iconComponent={<BiRevision />} onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
}

export default ParityCheck;
