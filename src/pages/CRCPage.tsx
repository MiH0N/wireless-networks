import { DataBits } from '@/components/DataBit';
import { useDataBit } from '@/utils/hooks/useDataBit';
import { FC } from 'react';
import MathJax from 'react-mathjax';
import { BsFiletypeKey } from 'react-icons/bs';

interface ICRCPageProps {}

export const CRCPage: FC<ICRCPageProps> = props => {
  const senderData = useDataBit('00000');
  const inlineFormula = senderData.data
    .split('')
    .reverse()
    .map((item, index) => {
      if (item === '1') {
        return index === 0 ? '1' : `x^${index}`;
      }
    })
    .filter(item => item !== undefined)
    .reverse()
    .join('+');
  return (
    <MathJax.Provider>
      <div className='h-full p-8'>
        <h1>Cyclic Redundancy Check (CRC)</h1>
        <div className='flex justify-center space-x-24 items-end mt-24 mb-8  w-full'>
          <div className='h-full space-y-6 text-center'>
			<div className='text-lg'>generator polynomial</div>
            <p className='text-xl min-h-[50px]'>
              <MathJax.Node inline formula={inlineFormula ?? '0'} />
            </p>
          </div>
          <div className='text-center space-y-5'>
            <p>Key</p>
            <DataBits data={senderData.data} onChangeBit={senderData.handleChangeBit} />
          </div>
        </div>

        <BsFiletypeKey style={{ fontSize: '100px', color: '#FACC14', margin: '4rem auto' }} />
      </div>
    </MathJax.Provider>
  );
};
