import { useEffect, useState } from 'react';
import { useDataBit } from './useDataBit';
import { UseCRCProps } from '@/types/UseCRCProps';
import { CRC } from '../CRCCodeword';

export const useCRC = ({ generator, dataword }: UseCRCProps) => {
  const generatorData = useDataBit(generator);
  const datawordData = useDataBit(dataword);
  const remainderData = useDataBit('000');
  const reciverData = useDataBit('0'.repeat(remainderData.data.length + datawordData.data.length));

  const [showItems, showItem] = useState(false);
  const [showConnectLoader, setShowConnectLoader] = useState(false);
  const [showDataReciver, setShowDataReciver] = useState(false);

  const handleKeyGenerator = (newBit: number, index: number) => {
    if (index !== generatorData.data.length - 1) {
      generatorData.handleChangeBit(newBit, index);
    }
  };

  useEffect(() => {
    if (generatorData.data.length <= datawordData.data.length) {
      const _reminder = CRC(datawordData.data, generatorData.data);
      remainderData.reset(_reminder);
      reciverData.reset(datawordData.data + _reminder);
    }
  }, [generatorData.data, datawordData.data]);

  useEffect(() => {
    if (showItems) {
      setShowConnectLoader(true);
      setTimeout(() => setShowDataReciver(true), 3000);
    }
  }, [showItems]);

  const sendData = () => {
    showItem(true);
  };

  return {
    generatorData,
    datawordData,
    remainderData,
    reciverData,
    showItems,
	showConnectLoader,
	showDataReciver,
    handleKeyGenerator,
    sendData,
  };
};
