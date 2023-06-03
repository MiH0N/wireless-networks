import { FC } from 'react';
import MathJax from 'react-mathjax';
import { RiKeyFill } from 'react-icons/ri';
import { CoMathJax } from '@/components/CoMathJax';
import { BitDataProps } from '@/types/BitData';
import { DataBits } from '../DataBit';

interface IGeneratorKeyProps {
  generatorData: BitDataProps;
  handleKeyGenerator: BitDataProps['handleChangeBit'];
}

export const GeneratorKey: FC<IGeneratorKeyProps> = ({ generatorData, handleKeyGenerator }) => {
  return (
    <MathJax.Provider>
      <div className='flex justify-center space-x-24 items-end mt-24 mb-8  w-full'>
        <div className='h-full space-y-6 text-center w-1/3'>
          <div className='text-lg'>generator polynomial</div>
          <p className='text-xl min-h-[50px]'>
            <RiKeyFill style={{ display: 'inline', marginRight: '1rem' }} /> :{' '}
            <CoMathJax data={generatorData.data} />
            <div className='hidden'>
              <MathJax.Node inline formula={'1'} />
            </div>
          </p>
        </div>
        <div className='text-center space-y-5 w-1/3'>
          <p>Key</p>
          <DataBits data={generatorData.data} onChangeBit={handleKeyGenerator} />
        </div>
      </div>
    </MathJax.Provider>
  );
};
