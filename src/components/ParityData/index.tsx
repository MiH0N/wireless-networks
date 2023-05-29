import { FC } from 'react';
import { BitDataProps } from '@/types/BitData';
import { DataBits } from '../DataBit';
import classNames from 'classnames';

interface IParityDataProps {
  mainData: BitDataProps;
  parityData: BitDataProps;
  handleChangeData: (newBit: number, index: number) => void;
  type: 'sender' | 'reciver';
  showError?: boolean;
  className?: string;
}

export const ParityData: FC<IParityDataProps> = ({
  mainData,
  parityData,
  handleChangeData,
  type = 'sender',
  showError = false,
  className,
}) => {
  return (
    <div className={classNames('flex justify-center space-x-5 items-center transition-all', className)}>
      <div className='text-center space-y-5'>
        <p>Data</p>
        <DataBits data={mainData.data} onChangeBit={handleChangeData} />
      </div>
      <div className='mb-4 self-end'> + </div>
      <div className='text-center space-y-5'>
        <p>parity</p>
        <DataBits
          data={parityData.data}
          disabled
          {...(type === 'reciver' ? { errors: showError ? 1 : undefined } : {})}
        />
      </div>
    </div>
  );
};
