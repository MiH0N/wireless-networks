import 'react-toastify/dist/ReactToastify.css';

import { useParityCheck } from '@/utils/hooks/useParityCheck';
import { Button } from '@/components/Button';

import { GrPowerReset } from 'react-icons/gr';
import { GrRss } from 'react-icons/gr';
import { GrStatusWarning } from 'react-icons/gr';

import { ParityData } from '@/components/ParityData';
import { MyLottie } from '@/components/Lottie/MyLottie';
import serverLottie from '@/constants/lotties/server.json';
import radarLottie from '@/constants/lotties/Radar.json';
import classNames from 'classnames';
import { ParityInfo } from '@/components/ParityInfo';
import { ConnectionLoader } from '@/components/ConnectionLoader';
import { ToastContainer } from 'react-toastify';

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
    showItems,
    showConnectLoader,
    showDataReciver,
    handleShowItem,
    hasError,
    setError,
  } = useParityCheck(initialData);

  return (
    <div className='h-full p-8'>
      <h1>Parity Check</h1>
      <div
        className={classNames(
          'space-x-8 my-4 flex items-center justify-between mt-8 relative min-h-[8rem]'
        )}>
        <ParityData
          mainData={senderData}
          parityData={paritySenderData}
          type='sender'
          handleChangeData={handleChangeSenderData}
          className={classNames(
            'duration-1000',
            !showItems ? 'left-1/2 right-1/2' : 'left-0',
            'absolute'
          )}
        />
        <ParityData
          mainData={reciverData}
          parityData={parityReciverData}
          type='reciver'
          handleChangeData={handleChangeReciverData}
          showError={paritySenderData.data !== parityReciverData.data}
          className={classNames(
            'absolute',
            showDataReciver ? 'duration-[800ms] right-0' : 'duration-[200ms] opacity-0'
          )}
        />
      </div>
      <div className='space-x-8 my-4 flex justify-around items-center mt-8'>
        <MyLottie
          width={200}
          animationData={radarLottie}
          show={showItems}
          className='rotateY-180 min-h-[12rem]'
        />
        <ConnectionLoader
          count={15}
          className={classNames(
            'duration-300 transition-all',
            showConnectLoader ? '' : 'opacity-0',
            !hasError && 'mb-6'
          )}
          isStatic={showConnectLoader && showDataReciver}
          type={hasError ? 'disconnect' : 'connect'}
        />
        <MyLottie
          width={160}
          animationData={serverLottie}
          className={classNames('min-h-[12rem] flex items-center')}
          show={showItems}
        />
      </div>
      <div className='flex space-x-5 justify-center'>
        <Button variant='dark' title='Send Data' iconComponent={<GrRss />} onClick={handleShowItem}>
          Send
        </Button>
        <Button
          variant='dark'
          title='Set Error'
          iconComponent={<GrStatusWarning />}
          onClick={setError}>
          Set Error
        </Button>
        <Button
          variant='warning'
          title='Reset'
          iconComponent={<GrPowerReset />}
          onClick={handleReset}>
          Reset
        </Button>
      </div>
      {showDataReciver && showItems && (
        <ParityInfo
          senderData={senderData}
          reciverData={reciverData}
          parityReciverData={parityReciverData}
          paritySenderData={paritySenderData}
        />
      )}
      <ToastContainer />
    </div>
  );
}

export default ParityCheck;
