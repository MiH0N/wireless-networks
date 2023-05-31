import { BitDataProps } from '@/types/BitData';
import { FC } from 'react';
import { MdInfoOutline } from 'react-icons/md';

interface IParityInfoProps {
  senderData: BitDataProps;
  reciverData: BitDataProps;
  paritySenderData: BitDataProps;
  parityReciverData: BitDataProps;
  className?: string;
}

export const ParityInfo: FC<IParityInfoProps> = ({
  senderData,
  paritySenderData,
  reciverData,
  parityReciverData,
  className,
}) => {
  const hasError = senderData.data === reciverData.data;
  const parityCheck = parityReciverData.data === paritySenderData.data;
  return (
    <div className='text-left space-y-4 my-4'>
      <div className='flex items-center space-x-3'>
        <h4>Is the real data different from the received data?</h4>
        <span className='text-[30px]'>{!hasError ? <>✅</> : <>✖️</>}</span>
      </div>
      <div className='flex items-center space-x-3'>
        <h4>has error in parity check ? </h4>
        <span className='text-[30px]'>{!parityCheck ? <>✅</> : <>✖️</>}</span>
      </div>
      {hasError !== parityCheck && (
        <div className='p-4 rounded-md text-red-600 border-red-400 border w-fit m-auto'>
          <MdInfoOutline className='mr-2 inline' />
          We have an error in the received data, but it cannot be detected with this method
        </div>
      )}
    </div>
  );
};
