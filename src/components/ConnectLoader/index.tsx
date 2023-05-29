import classNames from 'classnames';
import { FC } from 'react';
interface IConnectLoaderProps {
  count?: number;
  className?: string;
  isStatic?: boolean;
}

export const ConnectLoader: FC<IConnectLoaderProps> = ({ count = 4, className, isStatic }) => {
  return (
    <div className={classNames('flex  space-x-3 m-auto my-0 ', className)}>
      {[...Array(count)].map((item, index) => (
        <div
          key={index}
          className={classNames(!isStatic ? 'ball-animation ' : 'ball-static ', 'ball w-2.5 h-2.5')}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};
