import { DataBits } from '@/components/DataBit';
import { GeneratorKey } from '@/components/GeneratorKey';
import { CRC } from '@/utils/CRCCodeword';
import { useDataBit } from '@/utils/hooks/useDataBit';
import classNames from 'classnames';
import { FC, useEffect, useState } from 'react';

import { Button } from '@/components/Button';

import { GrPowerReset } from 'react-icons/gr';
import { GrRss } from 'react-icons/gr';
import { GrStatusWarning } from 'react-icons/gr';
import { ToastContainer } from 'react-toastify';
import { useCRC } from '@/utils/hooks/useCRC';

interface ICRCPageProps {}

const crcInitailParam = {
  generator: '01101',
  dataword: '100100',
};

export const CRCPage: FC<ICRCPageProps> = props => {
  
  const {
    generatorData,
    datawordData,
    remainderData,
    reciverData,
    showItems,
    handleKeyGenerator,
    sendData,
  } = useCRC(crcInitailParam);

  return (
    <div className='h-full p-8'>
      <h1>Cyclic Redundancy Check (CRC)</h1>
      <h4 className='mt-12 mb-8'>Key Generator</h4>
      <hr className='my-4 w-3/4 m-auto' />
      <GeneratorKey generatorData={generatorData} handleKeyGenerator={handleKeyGenerator} />
      <div className='relative'>
        <hr className='my-4 w-11/12 m-auto' />
        <h4 className='mt-12 mb-8'>Codeword</h4>
        <div className={classNames('flex justify-center space-x-5 items-center transition-all')}>
          <div className='text-center space-y-5'>
            <p>Data</p>
            <DataBits data={datawordData.data} onChangeBit={datawordData.handleChangeBit} />
          </div>
          <div className='mb-4 self-end'> + </div>
          <div className='text-center space-y-5'>
            <p>Remainder</p>
            <DataBits data={remainderData.data} onChangeBit={remainderData.handleChangeBit} />
          </div>
        </div>
        <div
          className={classNames(
            'text-center space-y-5 transition-all duration-700',
            showItems ? '' : 'opacity-0'
          )}>
          <h4 className='mt-12 mb-8'>Receiver Side</h4>
          <DataBits data={reciverData.data} onChangeBit={reciverData.handleChangeBit} />
        </div>
        <div className='flex-col space-y-2 justify-center absolute top-1/2'>
          <Button
            variant='dark'
            title='Send Data'
            sizeButton='sm'
            iconComponent={<GrRss />}
            onClick={sendData}>
            Send
          </Button>
          <Button
            variant='dark'
            title='Set Error'
            iconComponent={<GrStatusWarning />}
            sizeButton='sm'
            onClick={() => {}}>
            Set Error
          </Button>
          <Button
            variant='warning'
            title='Reset'
            iconComponent={<GrPowerReset />}
            sizeButton='sm'
            onClick={() => {}}>
            Reset
          </Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
