import { useDataBit } from 'utils/hooks/useDataBit';
import { counterTrue } from '@/utils/counterTrue';
import { useEffect } from 'react';
type UseParityCheckProps = {
  sender: string;
  reciver: string;
};

export const useParityCheck = (initialData: UseParityCheckProps) => {
  const senderData = useDataBit(initialData.sender);
  const paritySenderData = useDataBit((counterTrue(senderData.data) % 2).toString());
  const reciverData = useDataBit(initialData.reciver);
  const parityReciverData = useDataBit((counterTrue(reciverData.data) % 2).toString());

  useEffect(() => {
    paritySenderData.handleChangeBit(counterTrue(senderData.data) % 2, 0);
  }, [senderData]);

  useEffect(() => {
    parityReciverData.handleChangeBit(counterTrue(reciverData.data) % 2, 0);
  }, [reciverData]);

  const handleChangeSenderData = (newBit: number, index: number) => {
    senderData.handleChangeBit(newBit, index);
    reciverData.handleChangeBit(newBit, index);
  };
  const handleChangeReciverData = (newBit: number, index: number) => {
    reciverData.handleChangeBit(newBit, index);
  };

  const handleReset = () => {
    senderData.reset(initialData.sender);
    reciverData.reset(initialData.sender);
  };

  return {
    senderData,
    paritySenderData,
    reciverData,
    parityReciverData,
    handleChangeSenderData,
    handleChangeReciverData,
    handleReset,
  };
};
