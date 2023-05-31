/* eslint-disable @typescript-eslint/no-empty-interface */
import { FC } from 'react';
import { IConnectionLoaderProps } from '..';
import classNames from 'classnames';
import { AiOutlineThunderbolt } from 'react-icons/ai';

interface IDisconnectLoaderProps extends Omit<IConnectionLoaderProps, 'type' | 'isStatic'> {}

export const DisconnectLoader: FC<IDisconnectLoaderProps> = ({
  count = 10,
  className,
  ...props
}) => {
  // ball-error-active
  return (
    <div className='flex items-center m-auto'>
      <div className={classNames('flex space-x-3 m-0 me-4 ', className)}>
        {[...Array(7)].map((item, index) => (
          <div key={index} className={classNames('ball ball-error-animation w-2.5 h-2.5')} style={{
            animationDelay: `${index * 0.1}s`,
          }}/>
        ))}
      </div>
      <div className='border border-red-500 rounded-full p-4'>
        <AiOutlineThunderbolt
          style={{
            fontSize: '2.5rem',
            color: 'red',
          }}
        />
      </div>
      <div className={classNames('flex space-x-3 m-0 ms-4 ', className)}>
        {[...Array(7)].map((item, index) => (
          <div key={index} className={classNames('ball ball-error w-2.5 h-2.5')} />
        ))}
      </div>
    </div>
  );
};
