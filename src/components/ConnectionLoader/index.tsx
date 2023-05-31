import { FC } from 'react';
import { ConnectLoader } from './ConnectLoader';
import { DisconnectLoader } from './DisconnectLoader';
export interface IConnectionLoaderProps {
  count?: number;
  className?: string;
  isStatic?: boolean;
  type: 'connect' | 'disconnect';
}

export const ConnectionLoader: FC<IConnectionLoaderProps> = ({ type, ...props }) => {
  return type === 'connect' ? <ConnectLoader {...props} /> : <DisconnectLoader {...props} />;
};
