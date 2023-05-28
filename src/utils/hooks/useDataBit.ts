import { BitDataProps } from '@/types/BitData';
import { useState } from 'react';

export const useDataBit = (initialData: string): BitDataProps => {
  const [data, setData] = useState<string>(initialData);
  const handleChangeBit = (newBit: number, index: number) => {
    const _newData = data.split('');
    _newData[index] = newBit.toString();
    const newd = _newData.join('').toString();
    setData(newd);
  };
  const reset = (data: string) => setData(data);
  return {
    data,
    reset,
    handleChangeBit,
  };
};
