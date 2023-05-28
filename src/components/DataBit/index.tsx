import classNames from 'classnames';
import { FC, useState } from 'react';
import { BitItem } from './BitItem';
import { bitConvertor } from '../../utils/bitConvertor';
interface IDataBitsProps {
  data: string;
  disabled?: boolean;
}

export const DataBits: FC<IDataBitsProps> = ({ data: initialData, disabled }) => {
  const [data, setData] = useState<string>(initialData);
  const handleChangeBit = (newBit: number, index: number) => {
    const _newData = data.split('');
    _newData[index] = newBit.toString();
    const newd = _newData.join('').toString();
    setData(newd);
  };
  return (
    <div className='flex justify-center'>
      {data.split('').map((item, index) => (
        <BitItem
          status={index == 3 ? 'error' : index === 5 ? 'selected' : 'default'}
          key={index}
          bit={bitConvertor(item)}
          onClick={_bit => handleChangeBit(_bit, index)}
          className={classNames(
            index === 0 && 'border-l rounded-l-md',
            index === data.length - 1 && 'rounded-r-md'
          )}
          isDisabled={disabled}
        />
      ))}
    </div>
  );
};
