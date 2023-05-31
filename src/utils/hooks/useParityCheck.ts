import { useDataBit } from 'utils/hooks/useDataBit';
import { counterTrue } from '@/utils/counterTrue';
import { useEffect, useState } from 'react';
type UseParityCheckProps = {
  sender: string;
  reciver: string;
};

export const useParityCheck = (initialData: UseParityCheckProps) => {
  const [showItems, setShowItems] = useState(false);
  const [showDataReciver, setShowDataReciver] = useState(false);
  const [showConnectLoader, setShowConnectLoader] = useState(false);

  const senderData = useDataBit(initialData.sender);
  const paritySenderData = useDataBit((counterTrue(senderData.data) % 2).toString());
  const reciverData = useDataBit(initialData.reciver);
  const parityReciverData = useDataBit((counterTrue(reciverData.data) % 2).toString());

  const hasError = senderData.data !== reciverData.data;
  const parityCheck = parityReciverData.data === paritySenderData.data;

  useEffect(() => {
    paritySenderData.handleChangeBit(counterTrue(senderData.data) % 2, 0);
  }, [senderData]);

  useEffect(() => {
    parityReciverData.handleChangeBit(counterTrue(reciverData.data) % 2, 0);
  }, [reciverData]);

  useEffect(() => {
    if (showItems) {
      setShowConnectLoader(true);
      setTimeout(() => setShowDataReciver(true), 3000);
    }
  }, [showItems]);

  const handleChangeSenderData = (newBit: number, index: number) => {
    senderData.handleChangeBit(newBit, index);
    reciverData.handleChangeBit(newBit, index);
  };
  const handleChangeReciverData = (newBit: number, index: number) => {
    reciverData.handleChangeBit(newBit, index);
  };

  const handleShowItem = () => setShowItems(true);

  const handleReset = () => {
    if (showItems && showConnectLoader && showDataReciver) {
      senderData.reset(initialData.sender);
      reciverData.reset(initialData.sender);
      setShowConnectLoader(false);
      setShowDataReciver(false);
      setShowItems(false);
    }
  };

  return {
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
    hasError: hasError || !parityCheck,
  };
};
