import classNames from 'classnames';
import { FC } from 'react';

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant: 'primary' | 'error' | 'warning' | 'dark';
  iconComponent?: JSX.Element;
  className?: string;
  sizeButton?: 'sm' | 'md';
}

const sizeButtonStyle = {
  sm: 'p-2 text-sm',
  md: 'p-3 text-14',
};

const buttonStyle = (variant: IButtonProps['variant'], sizeButton: IButtonProps['sizeButton']) => {
  const baseClassName =
    'rounded-md transition-all duration-300 ' + sizeButtonStyle[sizeButton ?? 'md'];
  let classname = baseClassName;
  const primaryClassNames = 'text-white bg-blue-400';
  const warningClassNames = 'bg-yellow-400 text-white rounded hover:shadow-lg';
  const darkClassNames = 'bg-[#204E58] text-white rounded hover:shadow-lg';
  const errorClassNames = 'bg-red-400 text-white rounded hover:shadow-lg';
  switch (variant) {
    case 'primary':
      classname += ' ' + primaryClassNames;
      break;
    case 'warning':
      classname += ' ' + warningClassNames;
      break;
    case 'dark':
      classname += ' ' + darkClassNames;
      break;
    case 'error':
      classname += ' ' + errorClassNames;
      break;
    default:
      break;
  }
  return classname;
};

export const Button: FC<IButtonProps> = ({
  variant = 'primary',
  children,
  sizeButton,
  className = '',
  iconComponent,
  ...props
}) => {
  return (
    <button
      className={classNames(
        buttonStyle(variant, sizeButton),
        !!iconComponent && 'flex items-center',
        className
      )}
      {...props}>
      {children}
      {iconComponent && <span className={classNames(!!children && 'ms-2')}>{iconComponent}</span>}
    </button>
  );
};
