import { FC } from 'react';
interface IConnectLoaderProps {
  count?: number;
}

export const ConnectLoader: FC<IConnectLoaderProps> = ({ count = 4 }) => {
  return (
    <div className='flex  space-x-3 m-auto my-0 '>
      {[...Array(count)].map((item, index) => (
        <div
          className='ball w-2 h-2'
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};
