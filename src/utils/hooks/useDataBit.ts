import { useState } from 'react';

export const useDataBit = (initialData: string) => {
  const [data, setData] = useState<string>(initialData);
  const handleChangeBit = (newBit: number, index: number) => {
    const _newData = data.split('');
    _newData[index] = newBit.toString();
    const newd = _newData.join('').toString();
    setData(newd);
  };
  return {
    data,
    handleChangeBit,
  };
};
