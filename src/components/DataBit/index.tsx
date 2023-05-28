import classNames from 'classnames';
import { FC, useState } from 'react';
import { BitItem } from './BitItem';
import { bitConvertor } from '../../utils/bitConvertor';
interface IDataBitsProps {
  data: string;
  disabled?: boolean;
  onChangeBit : (newBit: number, index: number) => void
}

export const DataBits: FC<IDataBitsProps> = ({ data, disabled , onChangeBit }) => {
  return (
    <div className='flex justify-center'>
      {data.split('').map((item, index) => (
        <BitItem
          // status={index == 3 ? 'error' : index === 5 ? 'selected' : 'default'}
          key={index}
          bit={bitConvertor(item)}
          onClick={_bit => onChangeBit(_bit, index)}
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
