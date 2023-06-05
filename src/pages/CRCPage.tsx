import { DataBits } from '@/components/DataBit';
import { GeneratorKey } from '@/components/GeneratorKey';
import { CRC } from '@/utils/CRCCodeword';
import { useDataBit } from '@/utils/hooks/useDataBit';
import { FC, useEffect } from 'react';

interface ICRCPageProps {}

export const CRCPage: FC<ICRCPageProps> = props => {
  const generatorData = useDataBit('00001');
  const datawordData = useDataBit('100100');

  const handleKeyGenerator = (newBit: number, index: number) => {
    if (index !== generatorData.data.length - 1) {
      generatorData.handleChangeBit(newBit, index);
    }
  };

  useEffect(() => {
    if (generatorData.data.length <= datawordData.data.length) {
      console.log(datawordData.data, generatorData.data,CRC(datawordData.data, generatorData.data));
    }
  }, [generatorData.data, datawordData.data]);

  return (
    <div className='h-full p-8'>
      <h1>Cyclic Redundancy Check (CRC)</h1>
      <GeneratorKey generatorData={generatorData} handleKeyGenerator={handleKeyGenerator} />
      <DataBits data={datawordData.data} onChangeBit={datawordData.handleChangeBit} />
    </div>
  );
};
