import classNames from 'classnames';
import { FC } from 'react';

interface IBitItemProps {
  bit: number;
  onClick: (bit: number) => void;
  className: string;
  status?: 'default' | 'error' | 'selected';
  isDisabled?: boolean;
}

const StatusStyle = {
  default: 'hover:bg-gray-200',
  error: 'bg-red-400 text-white hover:bg-red-300',
  selected: 'bg-blue-400 text-white hover:bg-blue-300',
};

export const BitItem: FC<IBitItemProps> = ({
  bit,
  onClick,
  className,
  status = 'default',
  isDisabled = false,
}) => {
  const style = StatusStyle[status];
  return (
    <button
      className={classNames(
        style,
        'border-r border-y border-slate-700 p-4 m-0 min-w-[4rem] transition-all duration-400',
        className
      )}
      onClick={() => {
        if (!isDisabled) {
          onClick((bit + 1) % 2);
        }
      }}>
      {bit}
    </button>
  );
};
