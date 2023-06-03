import { DataBits } from '@/components/DataBit';
import { useDataBit } from '@/utils/hooks/useDataBit';
import { FC, useEffect } from 'react';
import MathJax from 'react-mathjax';
import { RiKeyFill } from 'react-icons/ri';
import { Button } from '@/components/Button';
import { CoMathJax } from '@/components/CoMathJax';

interface ICRCPageProps {}

export const CRCPage: FC<ICRCPageProps> = props => {
  const senderData = useDataBit('00001');

  const handleKeyGenerator = (newBit: number, index: number) => {
    if (index !== senderData.data.length - 1) {
      senderData.handleChangeBit(newBit, index);
    }
  };

  return (
    <MathJax.Provider>
      <div className='h-full p-8'>
        <h1>Cyclic Redundancy Check (CRC)</h1>
        <div className='flex justify-center space-x-24 items-end mt-24 mb-8  w-full'>
          <div className='h-full space-y-6 text-center w-1/3'>
            <div className='text-lg'>generator polynomial</div>
            <p className='text-xl min-h-[50px]'>
              <RiKeyFill style={{ display: 'inline' , marginRight : '1rem'}} /> : <CoMathJax data={senderData.data} />
              <div className='hidden'>
                <MathJax.Node inline formula={'1'} />
              </div>
            </p>
          </div>
          <div className='text-center space-y-5 w-1/3'>
            <p>Key</p>
            <DataBits data={senderData.data} onChangeBit={handleKeyGenerator} />
          </div>
        </div>
      </div>
    </MathJax.Provider>
  );
};
