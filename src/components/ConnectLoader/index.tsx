import classNames from 'classnames';
import { FC } from 'react';
interface IConnectLoaderProps {
  count?: number;
  className?: string;
}

export const ConnectLoader: FC<IConnectLoaderProps> = ({ count = 4, className }) => {
  return (
    <div className={classNames('flex  space-x-3 m-auto my-0 ', className)}>
      {[...Array(count)].map((item, index) => (
        <div
          key={index}
          className='ball w-2 h-2'
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};
