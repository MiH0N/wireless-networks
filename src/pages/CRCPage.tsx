import { DataBits } from '@/components/DataBit';
import { GeneratorKey } from '@/components/GeneratorKey';
import { useDataBit } from '@/utils/hooks/useDataBit';
import { FC, useEffect } from 'react';
import MathJax from 'react-mathjax';

interface ICRCPageProps {}

export const CRCPage: FC<ICRCPageProps> = props => {
  const generatorData = useDataBit('00001');

  const handleKeyGenerator = (newBit: number, index: number) => {
    if (index !== generatorData.data.length - 1) {
      generatorData.handleChangeBit(newBit, index);
    }
  };

  return (
    <div className='h-full p-8'>
      <h1>Cyclic Redundancy Check (CRC)</h1>
      <GeneratorKey generatorData={generatorData} handleKeyGenerator={handleKeyGenerator} />
    </div>
  );
};
