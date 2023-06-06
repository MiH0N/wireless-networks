import classNames from 'classnames';
import { FC, useState } from 'react';
import { BitItem } from './BitItem';
import { bitConvertor } from '../../utils/bitConvertor';
interface IDataBitsProps {
  data: string;
  disabled?: boolean;
  onChangeBit?: (newBit: number, index: number) => void;
  selected?: number | number[];
  errors?: number | number[];
  isAllError?: boolean;
}

export const DataBits: FC<IDataBitsProps> = ({
  data,
  disabled,
  onChangeBit,
  selected,
  errors,
  isAllError,
}) => {
  const getStatus = (key: number) => {
    if (typeof selected === 'number' && selected === key) {
      return 'selected';
    }
    if (typeof selected === 'object' && selected?.includes(key)) {
      return 'selected';
    }
    if (isAllError) return 'error';
    if (typeof errors === 'number' && errors === key) {
      return 'error';
    }
    if (typeof errors === 'object' && errors?.includes(key)) {
      return 'error';
    }
    return 'default';
  };
  return (
    <div className='flex justify-center'>
      {data.split('').map((item, index) => (
        <BitItem
          status={getStatus(index + 1)}
          key={index}
          bit={bitConvertor(item)}
          onClick={_bit => {
            if (onChangeBit !== undefined) onChangeBit(_bit, index);
          }}
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
